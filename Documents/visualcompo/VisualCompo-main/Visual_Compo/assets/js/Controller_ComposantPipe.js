$(document).ready(function() 
{	
	callServlet('ServletComposantPipe',{'typeOperation' : 'Pipe_checkData'}, 
				function(data) 
				{

					if(data != "Pipe_dataEmpty")
					{
						const keywords = data.split("|");
						let positionCurrentVal = -1;
						let currentVal = "";
						
						jQuery.each( keywords, function( i, val ) 
						{

							if(val.startsWith("§§"))
							{
								currentVal = val.substring(2);
								positionCurrentVal = i;
							}
							else
							{
								if(positionCurrentVal == -1)
								{

								}
								else
								{

								}							
							}
						});
						
						








						
					}
				}, function (error) 
				{
					console.log("Error - ServletComposantPipe : " + error.message);
				});
				
	
				
				
				
});