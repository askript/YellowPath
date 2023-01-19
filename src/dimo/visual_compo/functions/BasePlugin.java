package dimo.visual_compo.functions;

import java.io.UnsupportedEncodingException;
import java.util.MissingResourceException;
import java.util.ResourceBundle;

import com.yellowbox.plugin.service.IRecordServiceV3;
import com.yellowbox.plugin.service.ITableService;
import com.yellowbox.plugin.v3.Function;
import com.yellowbox.plugin.v3.ParamValues;
import com.yellowbox.plugin.v3.Params;
import com.yellowbox.plugin.v3.ui.UIHtml;
import com.yellowbox.plugin.v3.ui.UIPanel;
import com.yellowbox.plugin.v3.ui.UIParamDefault;
import com.yellowbox.plugin.v3.ui.UIRoot;
import com.yellowbox.ws.beans.Record;

import dimo.visual_compo.connection.YellowboxConnection;
import dimo.visual_compo.yellowbox.table.VisualYB;

public abstract class BasePlugin extends Function 
{
	public ITableService tableService;
	public IRecordServiceV3 recordService;

	public VisualYB yb_pipe;

	public YellowboxConnection yellowCo;

	public String idElement;
	public Record record;

    /*
    * Cette fonction est la première appelé lors de l'éxécution d'une classe Fonction dans YellowBox.
    * Etant un enfant de BasePlugin, on récupére toutes les valeurs paramétrés en amont.
    */
	@Override
	public ParamValues call() 
	{
		setProperties();
		apiCallOut();

		return new ParamValues();
	}

	public void apiCallOut() {}

	public void setProperties() 
	{
		tableService = getYellowboxEntryPoint().getServices().getTableService();
		recordService = getYellowboxEntryPoint().getServices().getRecordServiceV3();
		
		// yellowCo = new YellowboxConnection(this);

		this.idElement = getYellowboxEntryPoint().get("REF_FICHE").toString();
		if(idElement != null && !idElement.isEmpty())
		{
			this.record = getYellowboxEntryPoint().getServices().getRecordService().getRecordFromId(idElement);			
		}

		if (this.getClass() == Test.class) 
		{
			// this.yb_pipe = new PipeYB(this);
		}
	}

	
	@Override
	public String getDescription() {
		return "";
	}

	@Override
	public String getName() 
	{
		return this.getClass().getSimpleName();
	}

	@Override
	public String getTitle() {
		return getResourceProperty(this.getName(), "Titles");
	}

	@Override
	public UIRoot getParamInstanceUI() {
		UIRoot uiRoot = new UIRoot();

		UIHtml uiHtmlSeparator = new UIHtml();
		uiHtmlSeparator.setHtml("<hr class=\"plugin\" style=\"display: block;\">");

		UIHtml templateHtml = new UIHtml();
		templateHtml.setHtml(getRessourceAsString("/html/template.html"));
		uiRoot.add(templateHtml);

		if (this.getClass() == Test.class) 
		{
			UIPanel pnlYellwTest = new UIPanel("Configuration Composant : Pipe");
			pnlYellwTest.add(new UIParamDefault(VisualYB.Fields.name_target));

			uiRoot.add(pnlYellwTest);
		}

		return uiRoot;
	}

	@Override
	public Params getParams() {
		Params parameters = new Params();

		if (this.getClass() == Test.class) 
		{
			parameters.add(VisualYB.Fields.param_target());

		}

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
				"Erreur TEST_API : " + function + " | " + exception.getMessage() + " - " + exception.getCause());
		for (StackTraceElement ste : exception.getStackTrace()) {
			getYellowboxEntryPoint().getLog().putError(ste.getClassName() + " " + ste.getFileName() + " "
					+ ste.getLineNumber() + " " + ste.getMethodName());
		}
		getYellowboxEntryPoint().getNotification().addError(
				"Erreur TEST_API : " + function + " | " + exception.getMessage() + " - " + exception.getCause());
	}

}