
    
    var OutputList = []; 
    
    var image; 
    var caption;
    var desc;
    const descList = [
        'Bull dog', 
        'Dog with a cap', 
        'Dog with a toy', 
        'White dog', 
        'Fluffy dog', 
        'Dog with a ball', 
        'Dogs fighting for a bone', 
        'Cute dog', 
        'Running dog', 
        'Dog with hoodie'
    ]

    const text = [
        'A bulldog stands on the grass with a colorful toy in its mouth, looking intently at the camera.',
        'A black and white dog lies on the ground in the shade, surrounded by pine needles, with a yellow toy nearby.',
        'A small white poodle stands on a gravel path, mouth open in a playful pant, looking towards the wooden steps.',
        'A small, white, curly-haired dog standing on a rocky path.',
        'A happy, fluffy dog running towards the camera on a grassy field.', 
        'A brindle-coated dog playing with a yellow ball in a grassy area.', 
        'Dogs are muscular and has a strong build, wearing a studded collar.',
        'The dog has a cream-colored, curly coat and is wearing a blue collar.',
        'The dog is playing in the park and playing very wet',
        'A cheerful white dog with curly fur stands on a rocky path, looking up with its mouth open in excitement.'
    ]

    
    //create for loop to create images
    for(var i=0; i<10; i++) {
        //create file name and add to array

        OutputList.push('<li class="container">');

        image = '<img src="images/dogs/dog-image-' + (i+1)  +'.jpg">'
        OutputList.push(image); 

        caption = '<div class="caption"> Dog Image ' + (i+1) + '</div>';
        OutputList.push(caption);

        desc ='<div class="description" onclick="Openpopup (' + i + ')">'+ descList[i] + '</div>';
        OutputList.push(desc);

        OutputList.push('<div class="popup">');
        OutputList.push('<div class="popuptext" id="myPopup' + i + '">');
        OutputList.push('<p class="heading"> Dog Image ' +(i+1) + '</p>');
        OutputList.push('<p class="text">' + text[i] + '</p>');
        OutputList.push('<span onclick="Closepopup('+ i + ')" class="text_link"> Click this to close </span>');
        

        OutputList.push('</div>');
        

        OutputList.push('</div>');
        //OutputList.push('</div>');
        OutputList.push('</li>');

    } 
    
    console.log(OutputList);

    //display our images
    document.getElementById('album').innerHTML = OutputList.join(" "); 
    

    function Openpopup(x) {
        console.log("Open");
        var popup = document.getElementById("myPopup" + x);
        popup.classList.add("show");

    }

    function Closepopup(x) {
        console.log("Close");
        var popup = document.getElementById("myPopup" + x);
        popup.classList.remove("show");
    }
