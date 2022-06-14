$(document).ready(function() 
{	
console.log("0");
	callServlet('ServletComposantPipe',{'typeOperation' : 'Pipe_checkData'}, 
				function(data) 
				{
				console.log("1");
					if(data != "Pipe_dataEmpty")
					{
					    console.log("2");
						const keywords = data.split("|");
						console.log("3");
						let positionCurrentVal = -1;
						console.log("4");
						
						jQuery.each( keywords, function( i, val ) 
						{
						console.log("5");
							if(val.startsWith("§§"))
							{
							console.log("6");
								let currentVal = val.substring(2);
								console.log("7");
								positionCurrentVal = i;
							}
							else
							{
							console.log("8");
								if(positionCurrentVal == -1)
								{
								console.log("9");
								}
								else
								{
								console.log("10");
								}							
							}
						});
					}
				}, function (error) 
				{
					console.log("Error - ServletComposantPipe : " + error.message);
				});
});