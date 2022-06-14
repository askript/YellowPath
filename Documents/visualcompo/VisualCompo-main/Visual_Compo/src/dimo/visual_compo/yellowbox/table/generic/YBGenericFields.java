package dimo.visual_compo.yellowbox.table.generic;

import com.yellowbox.plugin.v3.Component;
import com.yellowbox.plugin.v3.ParamValues;

import dimo.visual_compo.functions.BasePlugin;

public class YBGenericFields 
{
	public String idElement;
	
	public YBGenericFields() {}
	
	public YBGenericFields(ParamValues paraV, String nameField_IdElement)
	{
		this.idElement = paraV.getStringValue(nameField_IdElement); 
	}
}
