package dimo.visual_compo.yellowbox.table.generic;

import com.yellowbox.plugin.service.ITableService;
import com.yellowbox.plugin.v3.Component;
import com.yellowbox.plugin.v3.Param;
import com.yellowbox.plugin.v3.Param.InOut;
import com.yellowbox.plugin.v3.Param.Type;
import com.yellowbox.plugin.v3.ParamValues;
import com.yellowbox.ws.beans.Table;

import dimo.visual_compo.RecordUtils;
import dimo.visual_compo.functions.BasePlugin;

public abstract class YBGenericTable 
{
	public Table table;
	public YBGenericFields fields; 
	public YBGenericValues values;
	
	protected void setCommonVariables(ParamValues paraV, ITableService tableService, String tableName, String nameValue_IdElement, String nameField_IdElement)
	{
		
		if(fields != null)
		{
			fields.idElement = paraV.getStringValue(nameField_IdElement); 			
		}
		else
		{
			fields = new YBGenericFields(paraV, nameField_IdElement);
		}

		if(values != null)
		{
			values.idElement = paraV.getStringValue(nameValue_IdElement);
			values.idTable = paraV.getStringValue(tableName); 

			if(RecordUtils.checkIfVariableAvailable(this.values.idTable))
			{
				this.table = tableService.getTableFromIdTable(this.values.idTable);			
			}			
		}
		else
		{
			values = new YBGenericValues(paraV, tableName, nameValue_IdElement);
		}
	}
	
	public static Param paramField(Type type, InOut inOut, String name, String varName, boolean mandatory)
	{
		Param prmField = new Param();
		prmField.setType(type);
		prmField.setInOut(inOut);
		prmField.setName(name); 
		prmField.setVarName(varName);
		prmField.setMandatory(mandatory);
		
		return prmField;
	}
}


