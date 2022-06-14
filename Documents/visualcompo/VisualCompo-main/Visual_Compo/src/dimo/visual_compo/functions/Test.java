package dimo.visual_compo.functions;

import java.util.List;

import com.yellowbox.plugin.v3.ParamServlet;

public class Test extends BasePlugin
{
	
	@Override
	public void apiCallOut()
	{
		getYellowboxEntryPoint().getLog().putInfo("Récupération du l'enregistrement");
		
	} 

	@Override
	public List<Class<? extends ParamServlet>> getParamServlets() throws AbstractMethodError 
	{
		return null;
	}
}
