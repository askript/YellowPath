package dimo.visual_compo.yellowbox.model;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.yellowbox.ws.beans.Record;
import com.yellowbox.ws.beans.RecordParam;
import com.yellowbox.ws.beans.Value;

import dimo.visual_compo.RecordUtils;
import dimo.visual_compo.functions.BasePlugin;

public class Interface_YBModel extends ModelYellowbox
{
	// private Interface yb_interface;

	private String result;

	private String lastExecutionDate;
	private long timestampLastExecutionDate;	
	private String currentDate;
	private long timestampCurrentDate;
	
	public Interface_YBModel(BasePlugin basePlugin) 
	{
		super(basePlugin);

		initialiseCurrentDate();
		// this.yb_interface = basePlugin.yb_interface;
		
		setRecord(getRecordFromParam());
		
		if(getRecord() != null)
		{
			setIdElement(getRecord().getId());
			setMap(getRecord());
			setFicheValues();			
		}
		else
		{
			manageErrors();
		}
	}
	
	private void setFicheValues()
	{		
		// this.setResult(getValueFromField(yb_interface.fields.result));
		// this.setLastExecutionDate(getValueFromField(yb_interface.fields.dateExecution));
	}

	public String getLastExecutionDate() {
		return lastExecutionDate;
	}
	
	public Value getValue_lastExecutionDate()
	{
		return null; // RecordUtils.createValue(yb_interface.fields.dateExecution, FieldType.DATE, getLastExecutionDate());
	}
	
	public long getTSLastExecutionDate()
	{
		return timestampLastExecutionDate;
	}
	
	public String getStringTSLED()
	{
		return  String.valueOf(getTSLastExecutionDate());
	}

	public String getResult() {
		return result;
	}
	
	public Value getValue_result()
	{
		return null; //  RecordUtils.createValue(yb_interface.fields.result, FieldType.ALPHANUMERIQUE, getResult());
	}

	public void setResult(String executionResult) {
		this.result = executionResult;
	}

	public String getCurrentDate()
	{
		return currentDate;
	}
	
	public long getTSCurrentDate()
	{
		return timestampCurrentDate;
	}
	
	public String getStringTSCD()
	{
		return  String.valueOf(getTSCurrentDate());
	}
	
	public void setLastExecutionDateToCurrentDate()
	{
		this.lastExecutionDate = getCurrentDate();
		this.timestampLastExecutionDate = getTSCurrentDate();
	}

	private void setLastExecutionDate(String lastExecutionDate)
	{
		this.lastExecutionDate = lastExecutionDate;
		try 
		{
			this.timestampLastExecutionDate = RecordUtils.getLongFromString(this.getLastExecutionDate());
		} 
		catch (ParseException e) 
		{
			getBasePlugin().displayException(e, "lastExecutionDate_ParseToLong");
		}
	}

	private void initialiseCurrentDate()
	{
		this.timestampCurrentDate = System.currentTimeMillis();
		Date dateCurrentDate = new Date(getTSCurrentDate());
		
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S");  
		this.currentDate =  dateFormat.format(dateCurrentDate);  		
	}
	
	private Record getRecordFromParam()
	{
		RecordParam rp = new RecordParam();
		// rp.setIdRecord(yb_interface.values.idElement);
		rp.setIncludeAllFields(true);
		// rp.setTableFieldId(yb_interface.values.idTable);
		return getBasePlugin().recordService.getRecordFromId(rp);
	}
	
	protected void manageErrors()
	{
		if(getRecord() == null)
		{
			//  getBasePlugin().displayException(null, "Model " + Interface.tableNameClass + " : Il n'y a pas d'enregistrement renseigné");
		}
		else
		{
			//  getBasePlugin().displayException(null, "Model " + Interface.tableNameClass + " : Erreur non reconnue");
		}
	}
}
