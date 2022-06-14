package dimo.visual_compo.composants;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.MissingResourceException;
import java.util.ResourceBundle;

import com.yellowbox.plugin.service.IRecordServiceV3;
import com.yellowbox.plugin.service.ITableService;
import com.yellowbox.plugin.v3.Component;
import com.yellowbox.plugin.v3.ParamServlet;
import com.yellowbox.plugin.v3.Params;
import com.yellowbox.plugin.v3.Servlet;
import com.yellowbox.plugin.v3.ui.UIHtml;
import com.yellowbox.plugin.v3.ui.UIPanel;
import com.yellowbox.plugin.v3.ui.UIParamDefault;
import com.yellowbox.plugin.v3.ui.UIRoot;
import com.yellowbox.ws.beans.Field;
import com.yellowbox.ws.beans.Keyword;
import com.yellowbox.ws.beans.Record;
import com.yellowbox.ws.beans.Value;

import dimo.visual_compo.connection.YellowboxConnection;
import dimo.visual_compo.servlets.ServletComposantPipe;
import dimo.visual_compo.yellowbox.table.VisualYB;

public class ComposantPipe extends Component 
{
	public ITableService tableService;
	public IRecordServiceV3 recordService;

	public VisualYB yb_visual;

	public YellowboxConnection yellowCo;

	public String idElement;
	public Record record;

    /*
    * Cette fonction est la première appelé lors de l'éxécution d'une classe Fonction dans YellowBox.
    * Etant un enfant de BasePlugin, on récupére toutes les valeurs paramétrés en amont.
    */
	@Override
	public  String getHtml() 
	{
		setProperties();

		return getRessourceAsString("/html/BaseTemplate_ComposantPipe.html");
	}

	public void setProperties() 
	{
		tableService = getYellowboxEntryPoint().getServices().getTableService();
		recordService = getYellowboxEntryPoint().getServices().getRecordServiceV3();

		yellowCo = new YellowboxConnection(this);

		this.idElement = getYellowboxEntryPoint().get("REF_FICHE").toString();
		if(idElement != null && !idElement.isEmpty())
		{
			this.record = getYellowboxEntryPoint().getServices().getRecordService().getRecordFromId(idElement);			
		}

		this.yb_visual = new VisualYB(this.getParamValues(), tableService);
		
		
		
		List<Keyword> liste = getYellowboxEntryPoint().getServices().getKeywordService().getKeywordListByKeywordListId(yb_visual.values.keywordsTarget);
		liste.get(0).getPosition();
		liste.get(0).getName();
		liste.get(0).getKeywordId();
		
		Value valueCycle = this.record.getValues()
								.stream()
								.filter(x -> x.getField().getId()
										.equals(yb_visual.fields.target))
								.findFirst().orElse(null);
		
		String cycleValeur = "";
		
//		for(Value val : record.getValues())
//		{
//			if(val.getField().equals(yb_visual.fields.target))
//			{
//				cycleValeur = val.getValue();
//			}
//		} 

		getYellowboxEntryPoint().getLog().putInfo(cycleValeur);
		
		
		cycleValeur = valueCycle.getValue();

		String unPetit ="";
	}


	@Override
	public List<String> getListCss() {
		List<String> listCss = new ArrayList<>();
		listCss.add("/css/bootstrap.min.css");
		listCss.add("/css/Style_ComposantPipe.css");
		return listCss;
	}

	@Override
	public List<String> getListJs() 
	{
		List<String> listJS = new ArrayList<>();
		listJS.add("/js/bootstrap.min.js");
		listJS.add("/js/Controller_ComposantPipe.js");
		return listJS;
	}
	
	@Override
	public String getDescription() {
		return "Afficher un Pipe";
	}

	@Override
	public String getName() 
	{
		return this.getClass().getSimpleName();
	}

	@Override
	public String getTitle() {
		return getResourceProperty(this.getName(), "Composant Pipe");
	}

	@Override
	public UIRoot getParamInstanceUI() {
		UIRoot uiRoot = new UIRoot();

		UIHtml uiHtmlSeparator = new UIHtml();
		uiHtmlSeparator.setHtml("<hr class=\"plugin\" style=\"display: block;\">");

		UIHtml templateHtml = new UIHtml();
		templateHtml.setHtml(getRessourceAsString("/html/template.html"));
		uiRoot.add(templateHtml);

		UIPanel pnlYellwTest = new UIPanel("Configuration Composant : Pipe");
		pnlYellwTest.add(new UIParamDefault(VisualYB.Fields.name_target));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsTarget));

		uiRoot.add(pnlYellwTest);

		return uiRoot;
	}

	@Override
	public Params getParams() {
		Params parameters = new Params();

		parameters.add(VisualYB.Fields.param_target());
		parameters.add(VisualYB.Values.param_keywordsTarget());

		return parameters;
	}

	private String getResourceProperty(String property, String resource) {
		String propertyValue = "";
		ResourceBundle resourceBundle = null;

		try {
			resourceBundle = ResourceBundle.getBundle("assets/resources." + resource);
			if (resource != null) {
				byte[] pText = resourceBundle.getString(property).getBytes();

				propertyValue = new String(pText, "UTF-8");
			}
		} catch (UnsupportedEncodingException | MissingResourceException e) {
			displayException(e, "getResourceProperty");
		}

		return propertyValue;
	}

	
	public void displayException(Exception exception, String function) {
		getYellowboxEntryPoint().getLog().putError(
				"Erreur Composant_Pipe : " + function + " | " + exception.getMessage() + " - " + exception.getCause());
		for (StackTraceElement ste : exception.getStackTrace()) {
			getYellowboxEntryPoint().getLog().putError(ste.getClassName() + " " + ste.getFileName() + " "
					+ ste.getLineNumber() + " " + ste.getMethodName());
		}
		getYellowboxEntryPoint().getNotification().addError(
				"Erreur Composant_Pipe : " + function + " | " + exception.getMessage() + " - " + exception.getCause());
	}

		
	@Override
	public List<Class<? extends Servlet>> getServlets() {
	List<Class<? extends Servlet>> listServlet = new ArrayList<Class<? extends Servlet>>();
	listServlet.add(ServletComposantPipe.class);
	return listServlet;
	}
	
	@Override
	public List<String> getAssets() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Class<? extends ParamServlet>> getParamServlets() throws AbstractMethodError {
		// TODO Auto-generated method stub
		return null;
	}

}