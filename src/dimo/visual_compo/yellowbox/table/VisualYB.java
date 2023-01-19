package dimo.visual_compo.yellowbox.table;

import java.util.ArrayList;
import java.util.List;

import com.yellowbox.plugin.service.ITableService;
import com.yellowbox.plugin.v3.Param;
import com.yellowbox.plugin.v3.Param.InOut;
import com.yellowbox.plugin.v3.Param.Type;

import dimo.visual_compo.yellowbox.table.generic.YBGenericFields;
import dimo.visual_compo.yellowbox.table.generic.YBGenericTable;
import dimo.visual_compo.yellowbox.table.generic.YBGenericValues;

import com.yellowbox.plugin.v3.ParamValues;
import com.yellowbox.plugin.v3.YbKeyValuePair;

public class VisualYB extends YBGenericTable
{
	public static final String tableNameClass = "PipeYB";
	public Fields fields;
	public Values values;
	
	public static final String name_table = tableNameClass + "tableName";
	public static Param param_table()
	{
		return paramField(Type.IDTABLE, InOut.IN, tableNameClass + " : Table", name_table, true);
	}
	
	public VisualYB(ParamValues paraV, ITableService tableService) 
	{
		this.fields = new Fields(paraV);
		this.values = new Values(paraV);
		this.setCommonVariables(paraV,  tableService , name_table, Values.name_idElement, Fields.name_idElement);
	}
	
	public static class Fields extends YBGenericFields
	{
		
		public static final String fieldNameClass = tableNameClass + "Field";
				
		public String target;
		
		public List<String> valeursRupture = new ArrayList<>();
		
		public Fields(ParamValues paraV)
		{
			this.target = paraV.getStringValue(name_target);
			
	        try {
	            valeursRupture = paraV.getStringValues(name_targetEnum);
	        } catch (Exception e) {
	            valeursRupture = new ArrayList<>();
	        }
	        if(valeursRupture == null) {
	            valeursRupture = new ArrayList<>();
	        }
		}
		
		public static final String name_idElement = fieldNameClass + "idElement";
		public static Param param_idElement()
		{
			return paramField(Type.IDFIELD, InOut.IN, tableNameClass + " : IdElement", name_idElement, true);
		}
		
		public static final String name_target = fieldNameClass + "target";
		public static Param param_target()
		{
			return paramField(Type.IDFIELD, InOut.IN, tableNameClass + " : Cible", name_target, true);
		}
		
		public static final String name_targetEnum = fieldNameClass + "targetEnum";
		public static Param param_targetEnum()
		{
			Param pf = paramField(Type.STRING, InOut.IN, tableNameClass + " : Enumeration de la cible", name_targetEnum, true);
			pf.setMulti(true);
			pf.setDependsOn(name_target);
			
			return pf;
		}
		
	}
	
	public static class Values extends YBGenericValues
	{
		
		public static final String valueNameClass = tableNameClass + "Value";
		
		
		
		
		
		

		public String keywordTitle01;
		public String keywordTitle02;
		public String keywordTitle03;
		public String keywordTitle04;
		public String keywordTitle05;
		public String keywordTitle06;
		public String keywordTitle07;
		public String keywordTitle08;
		public String keywordTitle09;
		public String keywordTitle10;

		
		public String activateComments;
		public String activateModifications;
		public String activateSizeComments;
		public String keywordComments01;
		public String keywordComments02;
		public String keywordComments03;
		public String keywordComments04;
		public String keywordComments05;
		public String keywordComments06;
		public String keywordComments07;
		public String keywordComments08;
		public String keywordComments09;
		public String keywordComments10;
		
		
		public Values(ParamValues paraV)
		{
			
			
			this.activateComments = paraV.getStringValue(name_activateKeywordsComments);
			this.activateModifications = paraV.getStringValue(name_activateKeywordsModifications);
			this.activateSizeComments = paraV.getStringValue(name_sizeComment);
			
			this.keywordTitle01= paraV.getStringValue(name_keywordsTitle01);
			this.keywordTitle02= paraV.getStringValue(name_keywordsTitle02);
			this.keywordTitle03= paraV.getStringValue(name_keywordsTitle03);
			this.keywordTitle04= paraV.getStringValue(name_keywordsTitle04);
			this.keywordTitle05= paraV.getStringValue(name_keywordsTitle05);
			this.keywordTitle06= paraV.getStringValue(name_keywordsTitle06);
			this.keywordTitle07= paraV.getStringValue(name_keywordsTitle07);
			this.keywordTitle08= paraV.getStringValue(name_keywordsTitle08);
			this.keywordTitle09= paraV.getStringValue(name_keywordsTitle09);
			this.keywordTitle10= paraV.getStringValue(name_keywordsTitle10);
			
			
			this.keywordComments01= paraV.getStringValue(name_keywordsComments01);
			this.keywordComments02= paraV.getStringValue(name_keywordsComments02);
			this.keywordComments03= paraV.getStringValue(name_keywordsComments03);
			this.keywordComments04= paraV.getStringValue(name_keywordsComments04);
			this.keywordComments05= paraV.getStringValue(name_keywordsComments05);
			this.keywordComments06= paraV.getStringValue(name_keywordsComments06);
			this.keywordComments07= paraV.getStringValue(name_keywordsComments07);
			this.keywordComments08= paraV.getStringValue(name_keywordsComments08);
			this.keywordComments09= paraV.getStringValue(name_keywordsComments09);
			this.keywordComments10= paraV.getStringValue(name_keywordsComments10);

		}
		
		public static final String name_idElement = valueNameClass + "idElement";
		public static Param param_idElement()
		{
			return paramField(Type.STRING, InOut.IN, tableNameClass + " : IdElement", name_idElement, true);
		}
		

		public static final String name_activateKeywordsComments = valueNameClass + "activateKeywordsComments";
		public static Param param_activateKeywordsComments()
		{ 
			List<YbKeyValuePair> liste_YesNo = new ArrayList<>();

		    liste_YesNo.add(new YbKeyValuePair("1", "Oui"));
		    liste_YesNo.add(new YbKeyValuePair("0", "Non"));
		        
		        
			Param p_keywordsActivateComments = paramField(Type.STRING, InOut.IN, tableNameClass + " : Afficher les titres & commentaires", name_activateKeywordsComments, true);
			p_keywordsActivateComments.setValuesList(liste_YesNo);
			return p_keywordsActivateComments;
		}
		
		
		
		public static final String name_activateKeywordsModifications = valueNameClass + "activateKeywordsModifications";
		public static Param param_activateKeywordsModifications()
		{ 
			List<YbKeyValuePair> liste_YesNo = new ArrayList<>();

		    liste_YesNo.add(new YbKeyValuePair("1", "Oui"));
		    liste_YesNo.add(new YbKeyValuePair("0", "Non"));
		        
		        
			Param p_keywordsActivateModifications = paramField(Type.STRING, InOut.IN, tableNameClass + ": Autoriser la modification de la valeur cible ", name_activateKeywordsModifications, true);
			p_keywordsActivateModifications.setValuesList(liste_YesNo);
			return p_keywordsActivateModifications;
		}
		
		
		
		public static final String name_sizeComment = valueNameClass + "sizeComment";
		public static Param param_sizeComment()
		{ 
			List<YbKeyValuePair> liste_Size = new ArrayList<>();

		    liste_Size.add(new YbKeyValuePair("1", "Petit"));
		    liste_Size.add(new YbKeyValuePair("2", "Moyen"));
		    liste_Size.add(new YbKeyValuePair("3", "Grand"));
		        
		        
			Param p_keywordsActivateComments = paramField(Type.STRING, InOut.IN, tableNameClass + " : Taille de l'espace commentaire", name_sizeComment, true);
			p_keywordsActivateComments.setValuesList(liste_Size);
			return p_keywordsActivateComments;
		}
		
		
		
		public static final String name_keywordsComments01 = valueNameClass + "keywordsComments01";
		public static Param param_keywordsComments01()
		{
			Param p_keywordsComments = paramField(Type.LONGTEXT, InOut.IN, tableNameClass + " : Commentaire  01 (Passage a la ligne : &lt;br&gt;)", name_keywordsComments01, false);
			//p_keywordsComments.setDescription("A remplir sous forme => Titre | Commentaire");
			return p_keywordsComments;
			
		}
		public static final String name_keywordsComments02 = valueNameClass + "keywordsComments02";
		public static Param param_keywordsComments02()
		{
			Param p_keywordsComments = paramField(Type.LONGTEXT, InOut.IN, tableNameClass + " : Commentaire  02", name_keywordsComments02, false);
			
			return p_keywordsComments;
			
		}
		public static final String name_keywordsComments03 = valueNameClass + "keywordsComments03";
		public static Param param_keywordsComments03()
		{
			Param p_keywordsComments = paramField(Type.LONGTEXT, InOut.IN, tableNameClass + " : Commentaire  03", name_keywordsComments03, false);
			
			return p_keywordsComments;
			
		}
		public static final String name_keywordsComments04 = valueNameClass + "keywordsComments04";
		public static Param param_keywordsComments04()
		{
			Param p_keywordsComments = paramField(Type.LONGTEXT, InOut.IN, tableNameClass + " : Commentaire  04", name_keywordsComments04, false);
			
			return p_keywordsComments;
			
		}
		public static final String name_keywordsComments05 = valueNameClass + "keywordsComments05";
		public static Param param_keywordsComments05()
		{
			Param p_keywordsComments = paramField(Type.LONGTEXT, InOut.IN, tableNameClass + " : Commentaire  05", name_keywordsComments05, false);
			
			return p_keywordsComments;
			
		}
		public static final String name_keywordsComments06 = valueNameClass + "keywordsComments06";
		public static Param param_keywordsComments06()
		{
			Param p_keywordsComments = paramField(Type.LONGTEXT, InOut.IN, tableNameClass + " : Commentaire  06", name_keywordsComments06, false);
		
			return p_keywordsComments;
			
		}
		public static final String name_keywordsComments07 = valueNameClass + "keywordsComments07";
		public static Param param_keywordsComments07()
		{
			Param p_keywordsComments = paramField(Type.LONGTEXT, InOut.IN, tableNameClass + " : Commentaire  07", name_keywordsComments07, false);

			return p_keywordsComments;
			
		}
		public static final String name_keywordsComments08 = valueNameClass + "keywordsComments08";
		public static Param param_keywordsComments08()
		{
			Param p_keywordsComments = paramField(Type.LONGTEXT, InOut.IN, tableNameClass + " : Commentaire  08", name_keywordsComments08, false);

			return p_keywordsComments;
			
		}
		public static final String name_keywordsComments09 = valueNameClass + "keywordsComments09";
		public static Param param_keywordsComments09()
		{
			Param p_keywordsComments = paramField(Type.LONGTEXT, InOut.IN, tableNameClass + " : Commentaire  09", name_keywordsComments09, false);

			return p_keywordsComments;
			
		}
		public static final String name_keywordsComments10 = valueNameClass + "keywordsComments10";
		public static Param param_keywordsComments10()
		{
			Param p_keywordsComments = paramField(Type.LONGTEXT, InOut.IN, tableNameClass + " : Commentaire  10", name_keywordsComments10, false);

			return p_keywordsComments;
		}
		
		
		
		
		
		
		public static final String name_keywordsTitle01 = valueNameClass + "keywordsTitle01";
		public static Param param_keywordsTitle01()
		{
			Param p_keywordsTitle = paramField(Type.STRING, InOut.IN, tableNameClass + " : Titre  01 (Passage a la ligne : &lt;br&gt;)", name_keywordsTitle01, false);
			p_keywordsTitle.setDescription("A remplir sous forme => Titre | Commentaire");
			return p_keywordsTitle;
			
		}
		public static final String name_keywordsTitle02 = valueNameClass + "keywordsTitle02";
		public static Param param_keywordsTitle02()
		{
			Param p_keywordsTitle = paramField(Type.STRING, InOut.IN, tableNameClass + " : Titre  02", name_keywordsTitle02, false);
			
			return p_keywordsTitle;
			
		}
		public static final String name_keywordsTitle03 = valueNameClass + "keywordsTitle03";
		public static Param param_keywordsTitle03()
		{
			Param p_keywordsTitle = paramField(Type.STRING, InOut.IN, tableNameClass + " : Titre  03", name_keywordsTitle03, false);
			
			return p_keywordsTitle;
			
		}
		public static final String name_keywordsTitle04 = valueNameClass + "keywordsTitle04";
		public static Param param_keywordsTitle04()
		{
			Param p_keywordsTitle = paramField(Type.STRING, InOut.IN, tableNameClass + " : Titre  04", name_keywordsTitle04, false);
			
			return p_keywordsTitle;
			
		}
		public static final String name_keywordsTitle05 = valueNameClass + "keywordsTitle05";
		public static Param param_keywordsTitle05()
		{
			Param p_keywordsTitle = paramField(Type.STRING, InOut.IN, tableNameClass + " : Titre  05", name_keywordsTitle05, false);
			
			return p_keywordsTitle;
			
		}
		public static final String name_keywordsTitle06 = valueNameClass + "keywordsTitle06";
		public static Param param_keywordsTitle06()
		{
			Param p_keywordsTitle = paramField(Type.STRING, InOut.IN, tableNameClass + " : Titre  06", name_keywordsTitle06, false);
		
			return p_keywordsTitle;
			
		}
		public static final String name_keywordsTitle07 = valueNameClass + "keywordsTitle07";
		public static Param param_keywordsTitle07()
		{
			Param p_keywordsTitle = paramField(Type.STRING, InOut.IN, tableNameClass + " : Titre  07", name_keywordsTitle07, false);

			return p_keywordsTitle;
			
		}
		public static final String name_keywordsTitle08 = valueNameClass + "keywordsTitle08";
		public static Param param_keywordsTitle08()
		{
			Param p_keywordsTitle = paramField(Type.STRING, InOut.IN, tableNameClass + " : Titre  08", name_keywordsTitle08, false);

			return p_keywordsTitle;
			
		}
		public static final String name_keywordsTitle09 = valueNameClass + "keywordsTitle09";
		public static Param param_keywordsTitle09()
		{
			Param p_keywordsTitle = paramField(Type.STRING, InOut.IN, tableNameClass + " : Titre  09", name_keywordsTitle09, false);

			return p_keywordsTitle;
			
		}
		public static final String name_keywordsTitle10 = valueNameClass + "keywordsTitle10";
		public static Param param_keywordsTitle10()
		{
			Param p_keywordsTitle = paramField(Type.STRING, InOut.IN, tableNameClass + " : Titre  10", name_keywordsTitle10, false);

			return p_keywordsTitle;
		}
		
		
		
		
		
		
		
		
		
		
		
		
	}
}
