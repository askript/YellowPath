package dimo.visual_compo.yellowbox.table.generic;

import com.yellowbox.plugin.v3.Component;
import com.yellowbox.plugin.v3.ParamValues;

import dimo.visual_compo.functions.BasePlugin;

public class YBGenericValues 
{
	public String idTable;
	public String idElement;
	
	public YBGenericValues() {}
	
	public YBGenericValues(ParamValues paraV, String tableName, String nameValue_IdElement)
	{
		this.idTable = paraV.getStringValue(tableName); 
		this.idElement = paraV.getStringValue(nameValue_IdElement);
	}
}
