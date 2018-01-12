var drasticdata = {};
drasticdata.DrasticTreemap = function(container) {
    this.containerElement = container;
}
drasticdata.DrasticTreemap.prototype.draw = function(data, options, contextPath) {
    var stringCols = new Array();
    var numberCols = new Array();
    for (var i=0; i < data.getNumberOfColumns(); i++) {
        if (data.getColumnType(i) == "string") stringCols.push(data.getColumnLabel(i));
        if (data.getColumnType(i) == "number") numberCols.push(data.getColumnLabel(i));
    }
    if (stringCols.length == 0 || numberCols.length == 0) return;
    var groupbycol = (options && options.groupbycol && this.checkCol(data, options.groupbycol)) ? options.groupbycol : (stringCols[1] ? stringCols[1] : stringCols[0]);
    var labelcol = (options && options.labelcol && this.checkCol(data, options.labelcol)) ? options.labelcol : stringCols[0];
    var var1 = (options && options.variables && options.variables[0] && this.checkCol(data, options.variables[0])) ? options.variables[0] : numberCols[0];
    var var2 = (options && options.variables && options.variables[1] && this.checkCol(data, options.variables[1])) ? options.variables[1] : (numberCols[1] ? numberCols[1] : "");
    var var3 = (options && options.variables && options.variables[2] && this.checkCol(data, options.variables[2])) ? options.variables[2] : (numberCols[2] ? numberCols[2] : "");
    var flashvars = {};    
    flashvars.groupbycol = encodeURIComponent(groupbycol);
    flashvars.labelcol = encodeURIComponent(labelcol);
    flashvars.var1 = encodeURIComponent(var1);
    flashvars.var2 = encodeURIComponent(var2);
    flashvars.var3 = encodeURIComponent(var3);
    flashvars.data = encodeURIComponent(data.toJSON());
    var params = {
        menu: "false"
    };    
    var thetreemap = swfobject.embedSWF(contextPath+"/resources_vispublica/js/google/DrasticTreemapGApi09.swf", this.containerElement.id, 720,  parseInt(this.containerElement.style.height), "9.0.0", "expressInstall.swf", flashvars, params);
} 
drasticdata.DrasticTreemap.prototype.checkCol = function(data, colname) {
    for (var i=0; i < data.getNumberOfColumns(); i++) if (colname == data.getColumnLabel(i)) return(true); return(false);
}