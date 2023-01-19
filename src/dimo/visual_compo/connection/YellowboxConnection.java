package dimo.visual_compo.connection;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.yellowbox.plugin.v3.Component;
import com.yellowbox.ws.beans.Field;
import com.yellowbox.ws.beans.FieldType;
import com.yellowbox.ws.beans.ImportRecord;
import com.yellowbox.ws.beans.Operator;
import com.yellowbox.ws.beans.Page;
import com.yellowbox.ws.beans.Pageable;
import com.yellowbox.ws.beans.QueryPage;
import com.yellowbox.ws.beans.QueryValuesPage;
import com.yellowbox.ws.beans.Record;
import com.yellowbox.ws.beans.SearchValues;
import com.yellowbox.ws.beans.Value;

import dimo.visual_compo.RecordUtils;
import dimo.visual_compo.composants.ComposantPipe;
import dimo.visual_compo.functions.BasePlugin;
import dimo.visual_compo.yellowbox.model.Interface_YBModel;

public class YellowboxConnection
{
	public ComposantPipe basePlugin;
	
	public YellowboxConnection(ComposantPipe basePlugin) 
	{
		this.basePlugin = basePlugin;
	}
	
	// Update Interface in Yb
	public Interface_YBModel updateInterface(Interface_YBModel interfaceYb)
	{			
		List<Value> l_values = Arrays.asList(interfaceYb.getValue_lastExecutionDate(),
											interfaceYb.getValue_result());
		
		Record recordToAdd = new Record();
		// recordToAdd.setTable(basePlugin.yb_interface.table);
		recordToAdd.setValues(new ArrayList<>(l_values));
		recordToAdd.setId(interfaceYb.getIdElement());
		
		ImportRecord importRecord = new ImportRecord();
		importRecord.setRecord(recordToAdd);
		
		try
		{
			interfaceYb.setIdElement(basePlugin.recordService.createOrUpdate(importRecord));
		}
		catch(Exception e)
		{
			basePlugin.displayException(e, "updateInterface");
		}
		return interfaceYb;
	}
	
	public List<Record> getLastCreatedContacts(Interface_YBModel interfaceYb)
	{
		List<Record> listRecordsContacts;
		Pageable pageable = RecordUtils.createPageable(1, 1000);
		
		SearchValues sv = new SearchValues();
		
		Value valueLastExecutionDate = new Value();
		
		Field fieldCreateDate = new Field();
		fieldCreateDate.setFieldType(FieldType.DATE);

		valueLastExecutionDate.setField(fieldCreateDate);
		valueLastExecutionDate.setOperator(Operator.GREATER);
		valueLastExecutionDate.setValue(interfaceYb.getLastExecutionDate());

		Value valueCurrentDate = new Value();
		
		Field field = new Field();
		field.setFieldType(FieldType.DATE);
		
		valueCurrentDate.setField(fieldCreateDate);
		valueCurrentDate.setOperator(Operator.LESSOREQUAL);
		valueCurrentDate.setValue(interfaceYb.getCurrentDate());
		
		List<Value> values = new ArrayList<Value>();
		values.add(valueLastExecutionDate);
		
		sv.setValues(values);
		
		QueryValuesPage qvp = new QueryValuesPage();
		qvp.setIncludeAllFields(true);
		qvp.setPageable(pageable);
		qvp.setSearchValues(sv);
		
		Page<Record> p_record = basePlugin.recordService.getRecordsBySearchValues(qvp);
		listRecordsContacts = p_record.getContent();
		
		
		long recordNumber = p_record.getNbSelection();
		long currentNumberEndPage = 1000;
		int nextPage = 1;
		
		while(recordNumber > 1000 && currentNumberEndPage < recordNumber)
		{
			nextPage++;
			currentNumberEndPage = nextPage * 1000;
			
			Pageable pageable_while = RecordUtils.createPageable(nextPage, 1000);
			
			QueryValuesPage qvp_while = new QueryValuesPage();
			qvp_while.setIncludeAllFields(true);
			qvp_while.setPageable(pageable_while);
			qvp_while.setSearchValues(sv);
			
			Page<Record> p_record_while = basePlugin.recordService.getRecordsBySearchValues(qvp_while); 
			
			listRecordsContacts.addAll(p_record_while.getContent());
		}

		return listRecordsContacts;
	}
	
	public List<Record> getLastCreatedSocietiesBySearch(Interface_YBModel interfaceYb)
	{
		return null;//getRecordsFromSearch(basePlugin.societySearchId, interfaceYb.getLastExecutionDate());
	}
	
	public List<Record> getRecordsFromSearch(String idSearch, String varReffiche)
	{
		List<Record> records = null;
		int sizeMax = 1000;
		
		QueryPage queryPage = getCustomQueryPage(idSearch,varReffiche,1,sizeMax);
		
		Page<Record> p_record = basePlugin.recordService.getRecordsBySearch(queryPage);
		records = p_record.getContent();
		
		long recordNumber = p_record.getNbSelection();
		int nextPage = 1;
		
		while(recordNumber == sizeMax)
		{
			nextPage++;
			
			QueryPage queryPage_while =  getCustomQueryPage(idSearch,varReffiche,nextPage,sizeMax);

			Page<Record> p_record_while = basePlugin.recordService.getRecordsBySearch(queryPage_while);
			recordNumber = p_record_while.getNbSelection();
			
			records.addAll(p_record_while.getContent());
		}
		
		return records;
	}
	
	public QueryPage getCustomQueryPage(String idSearch, String varReffiche, int nextPage, int sizeMax)
	{
		Pageable pageable = RecordUtils.createPageable(nextPage, sizeMax);
		
		QueryPage queryPage = new QueryPage();
		queryPage.setIdSearch(idSearch);
		queryPage.setPageable(pageable);		
		queryPage.setIncludeAllFields(true);
		if(varReffiche != null)
		{
			queryPage.setVarReffiche(varReffiche);				
		}
		return queryPage;
	}

}
