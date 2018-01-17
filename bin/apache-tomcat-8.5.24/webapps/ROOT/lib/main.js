//
//  main.js
//
//  A project template for using arbor.js
//

(function ($) {
	var sys = arbor.ParticleSystem(1000, 1000, 0.5, true) // create the system with sensible repulsion/stiffness/friction
	var Renderer = function (canvas) {
		var canvas = $(canvas).get(0)
		var ctx = canvas.getContext("2d");
		var particleSystem

		var that = {
			init: function (system) {
				//
				// the particle system will call the init function once, right before the
				// first frame is to be drawn. it's a good place to set up the canvas and
				// to pass the canvas size to the particle system
				//
				// save a reference to the particle system for use in the .redraw() loop
				particleSystem = system

				// inform the system of the screen dimensions so it can map coords for us.
				// if the canvas is ever resized, screenSize should be called again with
				// the new dimensions
				particleSystem.screenSize(canvas.width, canvas.height)
				particleSystem.screenPadding(80) // leave an extra 80px of whitespace per side

				// set up some event handlers to allow for node-dragging
				that.initMouseHandling()
			},

			redraw: function () {
				// 
				// redraw will be called repeatedly during the run whenever the node positions
				// change. the new positions for the nodes can be accessed by looking at the
				// .p attribute of a given node. however the p.x & p.y values are in the coordinates
				// of the particle system rather than the screen. you can either map them to
				// the screen yourself, or use the convenience iterators .eachNode (and .eachEdge)
				// which allow you to step through the actual node objects but also pass an
				// x,y point in the screen's coordinate system
				// 
				ctx.fillStyle = "black"
				ctx.fillRect(0, 0, canvas.width, canvas.height)

				particleSystem.eachEdge(function (edge, pt1, pt2) {
					// edge: {source:Node, target:Node, length:#, data:{}}
					// pt1:  {x:#, y:#}  source position in screen coords
					// pt2:  {x:#, y:#}  target position in screen coords

					// draw a line from pt1 to pt2
					ctx.strokeStyle = "rgba(255,255,255, .333)"
					ctx.lineWidth = 3
					ctx.beginPath()
					ctx.moveTo(pt1.x, pt1.y)
					ctx.lineTo(pt2.x, pt2.y)
					ctx.stroke()

					//ctx.fillStyle = "yellow";
					//ctx.font = 'italic 13px sans-serif';
					//ctx.fillText(edge.data.name, (pt1.x + pt2.x) / 2, (pt1.y + pt2.y) / 2);
				})

				particleSystem.eachNode(function (node, pt) {
					// node: {mass:#, p:{x,y}, name:"", data:{}}
					// pt:   {x:#, y:#}  node position in screen coords

					// draw a rectangle centered at pt
					var w = 10
					if(node.data.nivel==1){
						ctx.fillStyle="red"}
					else if (node.data.nivel==2){
						ctx.fillStyle="orange"}
					else if (node.data.nivel==3){
						ctx.fillStyle="yellow"}
					else{
						ctx.fillStyle="white"
					}
					//ctx.fillStyle  = (node.data.alone) ? "red" : "orange";
					ctx.fillRect(pt.x - w / 2, pt.y - w / 2, w, w);
					ctx.fillStyle = "white";
					ctx.font = 'italic 13px sans-serif';
					ctx.fillText(node.name, pt.x + 8, pt.y + 8);

				})
			},

			initMouseHandling: function () {
				// no-nonsense drag and drop (thanks springy.js)
				selected = null;
				nearest = null;
				var dragged = null;
				var oldmass = 1
				var mouse_is_down = false;
				var mouse_is_moving = false

				// set up a handler object that will initially listen for mousedowns then
				// for moves and mouseups while dragging
				var handler = {
					mousemove: function (e) {
						if (!mouse_is_down) {
							var pos = $(canvas).offset();
							_mouseP = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)
							nearest = particleSystem.nearest(_mouseP);

							if (!nearest.node) return false
							selected = (nearest.distance < 50) ? nearest : null
							if (selected && selected.node.data.link) {
								dom.addClass('linkable')
							} else {
								dom.removeClass('linkable')
							}
						}
						return false
					},
					clicked: function (e) {
						var pos = $(canvas).offset();
						_mouseP = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)
						nearest = particleSystem.nearest(_mouseP);

						if (!nearest.node) return false
						selected = (nearest.distance < 50) ? nearest : null

						if (nearest && selected && nearest.node === selected.node) {
							var link = selected.node.data.link
							if (link.match(/^#/)) {
								$(that).trigger({
									type: "navigate",
									path: link.substr(1)
								})
							} else {
								window.open(link, "_blank")
							}
							return false
						}
					},
					mousedown: function (e) {
						var pos = $(canvas).offset();
						_mouseP = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)
						selected = nearest = dragged = particleSystem.nearest(_mouseP);

						if (dragged.node !== null) dragged.node.fixed = true

						mouse_is_down = true
						mouse_is_moving = false

						$(canvas).bind('mousemove', handler.dragged)
						$(window).bind('mouseup', handler.dropped)

						return false
					},
					dragged: function (e) {
						var old_nearest = nearest && nearest.node._id
						var pos = $(canvas).offset();
						var s = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)

						mouse_is_moving = true

						if (!nearest) return
						if (dragged !== null && dragged.node !== null) {
							var p = particleSystem.fromScreen(s)
							dragged.node.p = p
						}

						return false
					},

					dropped: function (e) {
						if (dragged === null || dragged.node === undefined) return
						if (dragged.node !== null) dragged.node.fixed = false
						dragged.node.tempMass = 50
						dragged = null
						selected = null
						$(canvas).unbind('mousemove', handler.dragged)
						$(window).unbind('mouseup', handler.dropped)
						_mouseP = null

						if (mouse_is_moving) {
							// console.log("was_dragged")
						} else {
							handler.clicked(e)
						}

						mouse_is_down = false

						return false
					}
				}

				// start listening
				//$(canvas).mousedown(handler.clicked);
				$(canvas).mousedown(handler.mousedown);
				$(canvas).mousemove(handler.mousemove);
			},

		}
		return that
	}

	$(document).ready(function () {

		sys.parameters({
				gravity: true
			}) // use center-gravity to make the graph settle nicely (ymmv)
		sys.renderer = Renderer("#viewport") // our newly created renderer will have its .init() method called shortly by sys...
		sys.addEdge('ARQUIVO', 'Países')
		sys.addEdge('ARQUIVO', 'Quilombolas e Terras Indígenas')
		sys.addEdge('ARQUIVO', 'Hidrografia e Portos de Origem e Destino')
		sys.addEdge('ARQUIVO', 'Unidades de Conservação')
		sys.addEdge('ARQUIVO', 'Barragens e Eclusas')
		sys.addEdge('ARQUIVO', 'Dados Estatísticos e Socioeconômicos')
		sys.addEdge('ARQUIVO', 'Dados de Navegação')
		sys.addEdge('ARQUIVO', 'Administração Hidroviária')
		sys.addEdge('Administração Hidroviária', 'GERAL / DAQ (Diretoria Aquaviária)')
		sys.addEdge('GERAL / DAQ (Diretoria Aquaviária)', 'AHIMOC')
		sys.addEdge('GERAL / DAQ (Diretoria Aquaviária)', 'AHIMOR')
		sys.addEdge('GERAL / DAQ (Diretoria Aquaviária)', 'AHINOR')
		sys.addEdge('GERAL / DAQ (Diretoria Aquaviária)', 'AHITAR')
		sys.addEdge('GERAL / DAQ (Diretoria Aquaviária)', 'AHSFRA')
		sys.addEdge('GERAL / DAQ (Diretoria Aquaviária)', 'AHIPAR')
		sys.addEdge('GERAL / DAQ (Diretoria Aquaviária)', 'AHRANA')
		sys.addEdge('GERAL / DAQ (Diretoria Aquaviária)', 'AHSUL')
		sys.addEdge('ARQUIVO', 'Rodovias,Ferrovias e Sedes Municipais')
		sys.addEdge('ARQUIVO', 'Dados de Oferta e Demanda')
		sys.addEdge('Dados de Oferta e Demanda', 'Indústrias Esmagadoras de Soja')
		sys.addEdge('Dados de Oferta e Demanda', 'Dados de Demanda')
		sys.addEdge('Dados de Demanda', 'Mapas (Demanda)')
		sys.addEdge('Dados de Demanda', 'Planilhas (Demanda)')
		sys.addEdge('Dados de Demanda', 'Documentos (Demanda)')

		//sys.addNode('n', {alone: true,mass: .25,link: 'http://www.g1.com.br'})
		sys.addNode('ARQUIVO', {nivel:1,mass: .25})
		sys.addNode('Países', {nivel:2,mass: .25})
		sys.addNode('Quilombolas e Terras Indígenas', {nivel:2,mass: .25})
		sys.addNode('Hidrografia e Portos de Origem e Destino', {nivel:2,mass: .25})
		sys.addNode('Unidades de Conservação', {nivel:2,mass: .25})
		sys.addNode('Barragens e Eclusas', {nivel:2,mass: .25})
		sys.addNode('Administração Hidroviária', {nivel:2,mass: .25})
		sys.addNode('Dados Estatísticos e Socioeconômicos', {nivel:2,mass: .25})
		sys.addNode('Dados de Navegação', {nivel:2,mass: .25})
		sys.addNode('Rodovias,Ferrovias e Sedes Municipais', {nivel:2,mass: .25})
		sys.addNode('Dados de Oferta e Demanda', {nivel:2,mass: .25})
		sys.addNode('Indústrias Esmagadoras de Soja', {nivel:3,mass: .25})
		sys.addNode('Dados de Demanda', {nivel:3,mass: .25})
		sys.addNode('GERAL / DAQ (Diretoria Aquaviária)', {nivel:3,mass: .25})
	})

})(this.jQuery)
