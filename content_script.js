walk(document.body);

function walk(node) 
{	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bhe\b/g, "he/she");
	v = v.replace(/\bhis\b/g, "his/her");
	v = v.replace(/\bhim\b/g, "him/her");

  v = v.replace(/\bHe\b/g, "He/She");
	v = v.replace(/\bHis\b/g, "His/Her");
	v = v.replace(/\bHim\b/g, "Him/Her");
    
	v = v.replace(/\bMr.\b/g, "Mr./Mrs./Miss.");
	
	textNode.nodeValue = v;
}


