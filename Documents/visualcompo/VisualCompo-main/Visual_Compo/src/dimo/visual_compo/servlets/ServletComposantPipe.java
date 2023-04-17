package dimo.visual_compo.servlets;

import java.text.Normalizer;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;

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
    String infoTarget;
    
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
                infoTarget = valueCycle.getValue(); // 5 % Detection
                if(infoTarget == null || infoTarget.isEmpty())
                {
                    bld.append("Pipe_dataEmpty");
                }
                else
                {
                    List<String> enumsTarget = componentPipe.yb_visual.fields.valeursRupture;
                    JSONObject Json_Keywords = new JSONObject();
                    JSONArray Json_ArrayKeywords = new JSONArray();
                    for(int index = 0 ; index < enumsTarget.size(); index++ )  
                    {
                    	
                        JSONObject JsonPart_Keyword = null ;
                        if(index == 0)
                        {
                            JsonPart_Keyword = getJson_Part(enumsTarget.get(index),(componentPipe.yb_visual.values.keywordTitle01  +"|"+ componentPipe.yb_visual.values.keywordComments01));
                        }
                        else if(index  == 1)
                        {
                            JsonPart_Keyword = getJson_Part(enumsTarget.get(index),(componentPipe.yb_visual.values.keywordTitle02  +"|"+ componentPipe.yb_visual.values.keywordComments02));
                        }
                        else if(index  == 2)
                        {
                            JsonPart_Keyword = getJson_Part(enumsTarget.get(index),(componentPipe.yb_visual.values.keywordTitle03  +"|"+ componentPipe.yb_visual.values.keywordComments03));
                        }
                        else if(index  == 3)
                        {
                            JsonPart_Keyword = getJson_Part(enumsTarget.get(index),(componentPipe.yb_visual.values.keywordTitle04  +"|"+ componentPipe.yb_visual.values.keywordComments04));
                        }
                        else if(index  == 4)
                        {
                            JsonPart_Keyword = getJson_Part(enumsTarget.get(index),(componentPipe.yb_visual.values.keywordTitle05  +"|"+ componentPipe.yb_visual.values.keywordComments05));
                        }
                        else if(index  == 5)
                        {
                            JsonPart_Keyword = getJson_Part(enumsTarget.get(index),(componentPipe.yb_visual.values.keywordTitle06  +"|"+ componentPipe.yb_visual.values.keywordComments06));
                        }
                        else if(index  == 6)
                        {
                            JsonPart_Keyword = getJson_Part(enumsTarget.get(index),(componentPipe.yb_visual.values.keywordTitle07  +"|"+ componentPipe.yb_visual.values.keywordComments07));
                        }
                        else if(index  ==7)
                        {
                            JsonPart_Keyword = getJson_Part(enumsTarget.get(index),(componentPipe.yb_visual.values.keywordTitle08  +"|"+ componentPipe.yb_visual.values.keywordComments08));
                        }
                        else if(index  == 8)
                        {
                            JsonPart_Keyword = getJson_Part(enumsTarget.get(index),(componentPipe.yb_visual.values.keywordTitle09  +"|"+ componentPipe.yb_visual.values.keywordComments09));
                        }
                        else if(index  == 9)
                        {
                            JsonPart_Keyword = getJson_Part(enumsTarget.get(index),(componentPipe.yb_visual.values.keywordTitle10  +"|"+ componentPipe.yb_visual.values.keywordComments10));
                        }
                        Json_ArrayKeywords.put(JsonPart_Keyword);
                    }
                    Json_Keywords.put("keywords" , Json_ArrayKeywords);
                    
                    Json_Keywords.put("activeComments", this.componentPipe.yb_visual.values.activateComments);
                    
                    Json_Keywords.put("activeModifications", this.componentPipe.yb_visual.values.activateModifications);
                    
                    Json_Keywords.put("sizeComment", this.componentPipe.yb_visual.values.activateSizeComments);
                    
                    Json_Keywords.put("fieldTarget", this.componentPipe.yb_visual.fields.target);
                    
                    returnValue = Json_Keywords.toString(); 
//                  if(!returnValue.isEmpty() && !returnValue.equals("Pipe_dataEmpty"))
//                    {
//                        returnValue = returnValue.substring(0, returnValue.length()-1);
//                    }
                }
                return returnValue;
            }
        }
        else if(typeOperation.equals("Pipe_getUrlImage"))
        {
        	return this.componentPipe.getUrlAssets("/img/corpo_logo.svg");
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
    public JSONObject getJson_Part(String keyName, String keywordComments)
    {
        JSONObject JsonPart_Keyword = new JSONObject();
        String[] titre_commentaire = keywordComments.split("\\|");
        if(keyName.equals(infoTarget))
        {
            JsonPart_Keyword.put("Valeur", "§§" + keyName);
        }
        else
        	
        {
            JsonPart_Keyword.put("Valeur", keyName);
        }
        
      
        if (titre_commentaire.length>1 && this.componentPipe.yb_visual.values.activateComments.equals("1")) 
        {
        	
        JsonPart_Keyword.put( "Titre" , titre_commentaire[0]);
        
        String spaceComment = titre_commentaire[1].replaceAll("\\r?\\n", "<br>");
        JsonPart_Keyword.put( "Commentaire" , spaceComment);
      
        }
        
        return JsonPart_Keyword;        
    }
}