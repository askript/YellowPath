package dimo.visual_compo.servlets;

import java.text.Normalizer;
import java.util.List;
import java.util.Map;

import com.yellowbox.plugin.v3.ParamValues;
import com.yellowbox.plugin.v3.Servlet;
import com.yellowbox.ws.beans.Field;
import com.yellowbox.ws.beans.Keyword;
import com.yellowbox.ws.beans.Record;
import com.yellowbox.ws.beans.Value;

import dimo.visual_compo.RecordUtils;
import dimo.visual_compo.composants.ComposantPipe;

public class ServletComposantPipe extends Servlet 
{
	ComposantPipe componentPipe;

	String idCurrentFiche;
    Record currentRecord;
	List<Value> valuesCurrentFiche;
	
	String idQrCodeImgHtmlField;
	
	@Override
	public String call(ParamValues paramsServlet) 
	{
		String varReturn = "";

		componentPipe = (ComposantPipe) getComponent();
		
		String typeOperation = paramsServlet.getStringValue("typeOperation");

		if(typeOperation.equals("Pipe_checkData"))
		{
			Value valueCycle = componentPipe.record.getValues()
					          .stream()
					          .filter(x -> x.getField().getId()
							  .equals(componentPipe.yb_visual.fields.target))
					          .findFirst().orElse(null);
			
			if(valueCycle != null)
			{
				StringBuilder bld = new StringBuilder();
				String returnValue = "";
				String infoTarget = valueCycle.getValue(); // 5 % Detection
				if(infoTarget == null || infoTarget.isEmpty())
				{
					bld.append("Pipe_dataEmpty");
				}
				else
				{
					List<Keyword> keywordsTaget = componentPipe.getYellowboxEntryPoint()
							.getServices().getKeywordService()
					        .getKeywordListByKeywordListId(componentPipe.yb_visual.values.keywordsTarget);
					
					// keywordsTaget.sort(null);
					for(Keyword key : keywordsTaget)
					{
						if(key.getName().equals(infoTarget))
						{
							bld.append("§§" + key.getName() + "|");		
						}
						else
						{
							bld.append(key.getName() + "|");	// 1- Détection (5%)|...|§§...|...|						
						}

					}
					


					returnValue = bld.toString(); 
					
					if(!returnValue.isEmpty() && !returnValue.equals("Pipe_dataEmpty"))
					{
						returnValue = returnValue.substring(0, returnValue.length()-1);
					}
				}
				return returnValue;
			}
		}
		else
		{
			varReturn = "typeOperation ne repond a aucune condition";
		}

		return varReturn;
	}
	
	@Override
	public String getName() {
		return "ServletComposantPipe";
	}
}

