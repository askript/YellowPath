package dimo.visual_compo.yellowbox.table;

import com.yellowbox.plugin.service.ITableService;
import com.yellowbox.plugin.v3.Param;
import com.yellowbox.plugin.v3.Param.InOut;
import com.yellowbox.plugin.v3.Param.Type;

import dimo.visual_compo.yellowbox.table.generic.YBGenericFields;
import dimo.visual_compo.yellowbox.table.generic.YBGenericTable;
import dimo.visual_compo.yellowbox.table.generic.YBGenericValues;

import com.yellowbox.plugin.v3.ParamValues;

public class VisualYB extends YBGenericTable
{
	public static final String tableNameClass = "PipeYB";
	public Fields fields;
	public Values values;
	
	public static final String name_table = tableNameClass + "tableName";
	public static Param param_table()
	{
		return paramField(Type.IDTABLE, InOut.IN, tableNameClass + " : Table", name_table, true);
	}
	
	public VisualYB(ParamValues paraV, ITableService tableService) 
	{
		this.fields = new Fields(paraV);
		this.values = new Values(paraV);
		this.setCommonVariables(paraV,  tableService , name_table, Values.name_idElement, Fields.name_idElement);
	}
	
	public static class Fields extends YBGenericFields
	{
		public static final String fieldNameClass = tableNameClass + "Field";
				
		public String target;
		
		public Fields(ParamValues paraV)
		{
			this.target = paraV.getStringValue(name_target);
		}

		public static final String name_idElement = fieldNameClass + "idElement";
		public static Param param_idElement()
		{
			return paramField(Type.IDFIELD, InOut.IN, tableNameClass + " : IdElement", name_idElement, true);
		}
		
		public static final String name_target = fieldNameClass + "target";
		public static Param param_target()
		{
			return paramField(Type.IDFIELD, InOut.IN, tableNameClass + " : Cible", name_target, true);
		}
		
	}
	
	public static class Values extends YBGenericValues
	{
		public static final String valueNameClass = tableNameClass + "Value";
		
		public String keywordsTarget;
		
		public Values(ParamValues paraV)
		{
			this.keywordsTarget = paraV.getStringValue(name_keywordsTarget);
		}
		
		public static final String name_idElement = valueNameClass + "idElement";
		public static Param param_idElement()
		{
			return paramField(Type.STRING, InOut.IN, tableNameClass + " : IdElement", name_idElement, true);
		}
		
		public static final String name_keywordsTarget = valueNameClass + "valuesTarget";
		public static Param param_keywordsTarget()
		{
			return paramField(Type.STRING, InOut.IN, tableNameClass + " : Id de la liste d'énumération", name_keywordsTarget, true);
		}
	}
}
