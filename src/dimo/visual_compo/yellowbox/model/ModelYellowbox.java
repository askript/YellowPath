package dimo.visual_compo.yellowbox.model;

import java.util.Map;

import com.yellowbox.ws.beans.Record;
import com.yellowbox.ws.beans.Value;

import dimo.visual_compo.RecordUtils;
import dimo.visual_compo.functions.BasePlugin;

public class ModelYellowbox 
{
	private BasePlugin basePlugin;
	private String idElement;
	private Record record;
	private Map<String, Value> map;
	
	protected ModelYellowbox(BasePlugin basePlugin) 
	{
		this.setBasePlugin(basePlugin);
	}
	
	protected void setRecord_Id_Map(Record record)
	{
		this.record = record;
		this.setIdElement(getRecord().getId());
		setMap(getRecord());
	}
	
	public void setMap(Record record)
	{
		this.map = RecordUtils.getMapFields(record);
	}
	
	protected Map<String, Value> getMap()
	{
		return map;
	}
	
	protected Record getRecord()
	{
		return record;
	}
	
	protected void setRecord(Record record)
	{
		this.record = record;
	}
	
	public String getIdElement()
	{
		return idElement;
	}
	
	public void setIdElement(String idElement) 
	{
		this.idElement = idElement;
	}

	protected BasePlugin getBasePlugin() 
	{
		return basePlugin;
	}

	protected void setBasePlugin(BasePlugin basePlugin) 
	{
		this.basePlugin = basePlugin;
	}
	
	protected String getValueFromField(String field)
	{	
		String value = null;
		if(RecordUtils.checkIfVariableAvailable(field))
		{
			value = RecordUtils.getFieldValue(getMap(), field).getValue();
		}
		return value;
	}
}