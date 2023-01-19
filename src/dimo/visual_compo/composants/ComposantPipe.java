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
	
	
//	public ComposantPipe () {
//		
//		setSizeAuto(true);
//	}

    /*
    * Cette fonction est la première appelé lors de l'éxécution d'une classe Fonction dans YellowBox.
    * Etant un enfant de BasePlugin, on récupére toutes les valeurs paramétrés en amont.
    */
	@Override
	public  String getHtml() 
	{
		setProperties();

		String html = getRessourceAsString("/html/BaseTemplate_ComposantPipe.html");
		
		return html;
	}
	
	


	@Override
	public List<String> getAssets() {
		
	List<String> listImg = new ArrayList<>();
	listImg.add("image/image.svg");
	return listImg;
	
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
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_activateKeywordsComments));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_activateKeywordsModifications));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_sizeComment));
		
		pnlYellwTest.add(new UIParamDefault(VisualYB.Fields.name_targetEnum));
		
		List<String>valeursRupture = new ArrayList<>();
		
        try {
            valeursRupture = this.getParamValues().getStringValues(VisualYB.Fields.name_targetEnum);
        } catch (Exception e) {
            valeursRupture = new ArrayList<>();
        }
        if(valeursRupture == null) {
            valeursRupture = new ArrayList<>();
        }
        
        
        if ( 1 <= valeursRupture.size() ) {
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsTitle01));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsComments01));
        }
        if ( 2 <= valeursRupture.size() ) {
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsTitle02));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsComments02));
        }
        if ( 3 <= valeursRupture.size() ) {
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsTitle03));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsComments03));
        }
		if ( 4 <= valeursRupture.size() ) {
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsTitle04));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsComments04));
		}
		if ( 5 <= valeursRupture.size() ) {
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsTitle05));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsComments05));
		}
		if ( 6 <= valeursRupture.size() ) {
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsTitle06));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsComments06));
		}
		if ( 7 <= valeursRupture.size() ) {
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsTitle07));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsComments07));
		}
		if ( 8 <= valeursRupture.size() ) {
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsTitle08));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsComments08));
		}
		if ( 9 <= valeursRupture.size() ) {
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsTitle09));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsComments09));
		}
		if ( 10 <= valeursRupture.size() ) {
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsTitle10));
		pnlYellwTest.add(new UIParamDefault(VisualYB.Values.name_keywordsComments10));
		}
		uiRoot.add(pnlYellwTest);

		return uiRoot;
	}

	@Override
	public Params getParams() {
		Params parameters = new Params();

		parameters.add(VisualYB.Fields.param_target());
		parameters.add(VisualYB.Fields.param_targetEnum());
		
		
		
		parameters.add(VisualYB.Values.param_activateKeywordsComments());
		parameters.add(VisualYB.Values.param_activateKeywordsModifications());
		parameters.add(VisualYB.Values.param_sizeComment());
		
		parameters.add(VisualYB.Values.param_keywordsTitle01());
		parameters.add(VisualYB.Values.param_keywordsTitle02());
		parameters.add(VisualYB.Values.param_keywordsTitle03());
		parameters.add(VisualYB.Values.param_keywordsTitle04());
		parameters.add(VisualYB.Values.param_keywordsTitle05());
		parameters.add(VisualYB.Values.param_keywordsTitle06());
		parameters.add(VisualYB.Values.param_keywordsTitle07());
		parameters.add(VisualYB.Values.param_keywordsTitle08());
		parameters.add(VisualYB.Values.param_keywordsTitle09());
		parameters.add(VisualYB.Values.param_keywordsTitle10());
		
		parameters.add(VisualYB.Values.param_keywordsComments01());
		parameters.add(VisualYB.Values.param_keywordsComments02());
		parameters.add(VisualYB.Values.param_keywordsComments03());
		parameters.add(VisualYB.Values.param_keywordsComments04());
		parameters.add(VisualYB.Values.param_keywordsComments05());
		parameters.add(VisualYB.Values.param_keywordsComments06());
		parameters.add(VisualYB.Values.param_keywordsComments07());
		parameters.add(VisualYB.Values.param_keywordsComments08());
		parameters.add(VisualYB.Values.param_keywordsComments09());
		parameters.add(VisualYB.Values.param_keywordsComments10());
		

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
	public List<Class<? extends ParamServlet>> getParamServlets() throws AbstractMethodError {
		// TODO Auto-generated method stub
		return null;
	}

}