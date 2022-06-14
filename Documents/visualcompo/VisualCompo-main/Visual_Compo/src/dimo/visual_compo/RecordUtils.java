package dimo.visual_compo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import com.yellowbox.ws.beans.Field;
import com.yellowbox.ws.beans.FieldType;
import com.yellowbox.ws.beans.Keyword;
import com.yellowbox.ws.beans.LinkPage;
import com.yellowbox.ws.beans.Pageable;
import com.yellowbox.ws.beans.Record;
import com.yellowbox.ws.beans.RecordParam;
import com.yellowbox.ws.beans.Table;
import com.yellowbox.ws.beans.Value;

public class RecordUtils {

	public static Map<String, Value> getMapFields(Record record) {
		List<Value> values = new ArrayList<Value>();
		Map<String, Value> map = new HashMap<String, Value>();

		getAllValues(record, values);

		for (Value value : values) {
			map.put(value.getField().getId(), value);
		}
		return map;
	}

	public static void getAllValues(Record record, List<Value> values) {
		values.addAll(record.getValues());
		record.getLinkedRecords().forEach(x -> {
			getAllValues(x.getRecord(), values);
		});
	}

	public static Value getFieldValue(Map<String, Value> map, String fieldId) {
		Value result = null;
		
		if (map.containsKey(fieldId))
			result = map.get(fieldId);
		else if (map.containsKey("c" + fieldId))
			result = map.get("c" + fieldId);
		else if (map.containsKey("s" + fieldId))
			result = map.get("s" + fieldId);

		return result;
	}

	public static Record getRecordById(List<Record> recordList, String id) {
		return recordList.stream().filter(x -> x.getId().equals(id)).findAny().orElse(null);
	}

	public static Field createField(String idField, FieldType fieldType) {
		Field field = new Field();
		field.setId(idField);
		field.setFieldType(fieldType);
		return field;
	}

	public static Value createValue(String idField, FieldType fieldType, String value) {
		Field field = createField(idField, fieldType);

		Value valueYb = new Value();
		valueYb.setField(field);
		valueYb.setValue(value);
		return valueYb;
	}

	public static RecordParam createRecordParam(String idElement, String tableId, List<Field> fields,
			boolean includeAllFields) {
		RecordParam recordParam = new RecordParam();
		recordParam.setIdRecord(idElement);
		recordParam.setTableFieldId(tableId);
		recordParam.setFields(fields);
		recordParam.setIncludeAllFields(includeAllFields);
		return recordParam;
	}

	public static Record createRecord(Table table, String idElement) {
		Record record = new Record();
		record.setTable(table);
		record.setId(idElement);
		return record;
	}

	public static Pageable createPageable(int pageNumber, int pageSize) {
		Pageable pageable = new Pageable();
		pageable.setPageNumber(pageNumber);
		pageable.setPageSize(pageSize);
		return pageable;
	}

	public static int returnPositionFromKeyword(Keyword[] keywords, String word) {
		int position = 0;
		for (Keyword keyword : keywords) {
			if (keyword.getName().equals(word)) {
				position = keyword.getPosition();
			}
		}

		return position;
	}

	public static LinkPage createLinkPage(String idElement, String idTableElement, String idTableLink,
			List<Field> fields, boolean includeAllFields, Pageable pageable) {
		LinkPage linkPage = new LinkPage();
		linkPage.setIdElement(idElement);
		linkPage.setIdTableElement(idTableElement);
		linkPage.setIdTableLink(idTableLink);
		linkPage.setFields(fields);
		linkPage.setIncludeAllFields(includeAllFields);
		linkPage.setPageable(pageable);
		return linkPage;
	}

	public static String getStringDateNow() {
		DateTime now = new org.joda.time.DateTime();
		String pattern = "yyyy-MM-dd hh.mm.ss";
		DateTimeFormatter formatter = DateTimeFormat.forPattern(pattern);
		String formatted = formatter.print(now);
		return formatted;
	}

	public static Date getDateFromString(String stringDate) throws ParseException {
		return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S").parse(stringDate);
	}

	public static long getLongFromString(String stringDate) throws ParseException {
		Date date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S").parse(stringDate);
		return date.getTime();
	}

	public static boolean booleanFromString(String booleanString) {
		boolean bool = false;
		if (booleanString.equals("1")) {
			bool = true;
		}
		return bool;
	}
	
	public static boolean checkIfVariableAvailable(String field)
	{
		boolean isAvailalbe = false;
		if(field != null && !field.isEmpty())
		{
			isAvailalbe = true;
		}
		return isAvailalbe;
	}
}
