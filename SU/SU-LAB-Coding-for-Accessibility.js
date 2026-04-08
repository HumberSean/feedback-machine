//Usability Lab - Coding for Accessibility


var feedBack = [];

var item0=["LANGUAGE DECLARATION", "html element needs lang=&quot;en&quot; attribute."];
var item1=["SEMANTIC ELEMENTS", "&quot;Our Responsibility&quot; is a sub-heading of &quot;Accessibility&quot;, therefore, should be h3. Same for &quot;Want to Learn More?&quot;", "Use q element for inline quotes.", "Image and caption text should use the figure and figcaption elements."];
var item2=["IMAGES", "HTTP5221 logo", "Change the name of logo image file to something meaningful", "The checkmark is a decorative image so its alt attribute should be an empty string.", "What information is the screenshot communicating that the text is not communicating? That is what the alt text needs to communicate."];
var item3=["FORM", "Use fieldset and legend elements for multi-input forms, or for grouping sections of a form.", "Use label elements to associate text with input elements.", "Label elements need to use the for attribute matching the input id attribute to associate the label with the input."];



feedBack.push(item0, item1, item2, item3);