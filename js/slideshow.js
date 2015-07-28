var tn_array = $(".slides img").map(function () {
        return $(this).attr("src");
    }).get();

$('#MainImage').attr('src', tn_array[0]); // set first image of the list as the MainImage src
$('#Previous').css("visibility", "hidden"); // hide the Previous button at the beginning 

var lengthImages = tn_array.length; // Length of the image list
var CurrImage = 0; // Keep current Image index
var widthImg = 200; // Width of a image in the list 
var BottomLength = 4; // How many images currently shows in the bottom slide
var IndexDiff;  //This variable is used in the bottom slider click event 
        //as a reference for animate the slider
        
     $('#Next').click(function () {
        $('#MainImage').fadeOut('slow', function () {
            CurrImage = CurrImage + 1; // Update current image index
            $('#slider .slides').animate({ 'margin-left': '-=' + 
            widthImg}, 1000); //animate left margin of the slides list with the value 
                    //of -widthImg (-200px). So the bottom slider will animate to left side
            $('#MainImage').attr('src', tn_array[CurrImage]); // set next image to Main image
            if (CurrImage == lengthImages - BottomLength) { //This condition is checking 
                            //whether the bottom slider has comes to end or not.
                $('#Next').css("visibility", "hidden"); // if true then hide
            }
            if ($('#Previous').css("visibility") == 
                    "hidden") { // if Previous button is hidden 
                $('#Previous').css("visibility", 
                    "visible"); //then set it to visible
            }
        }).fadeIn(1000);
    });        
    
        $('#Previous').click(function () {
        $('#MainImage').fadeOut('slow', function () {
            CurrImage = CurrImage - 1; // Update the current image index
            $('#slider .slides').animate({ 'margin-left': '+=' + widthImg }, 
                1000); //animate the bottom slider with += widthImg, it will animate the slider to right 
            $('#MainImage').attr('src', tn_array[CurrImage]); // set corresponding image to main image
            if (CurrImage == 0) { // if current slide is the first image
                $('#Previous').css("visibility", "hidden"); // then hide the previous button
            }
            if ($('#Next').css("visibility") == "hidden") { // if next button is hidden
                $('#Next').css("visibility", "visible"); // then set it to visible
            }

        }).fadeIn(1000);
    });
    
     $('.slides li img').click(function () {
        var Imagesrc = $(this).attr('src'); // get the selected image src
        var ImageIndex = $(this).parent('.slide').index(); // get the selected list item index
           
        $('#MainImage').fadeOut('slow', function () {
            if (ImageIndex <= lengthImages - BottomLength) { // this condition checks 
                    //whether the bottom slider has come to the end or not.
                    //Also this will prevent sliding bottom slider to the left.
                IndexDiff = CurrImage; // Assign Current image index to IndexDiff temporary
                CurrImage = ImageIndex; // Assign selected image index to current image value
                IndexDiff = Math.abs(IndexDiff - CurrImage); // get the difference
                $('#slider .slides').animate({ 'margin-left': '-=' + 
                    widthImg * IndexDiff }, 1000); // slide the bottom slider to left by setting 
                                //left margin to (widthImg * IndexDiff) pixels.
                $('#MainImage').attr('src', Imagesrc); // set selected image source as main image

                if (ImageIndex != 0) { // image index is not equals to zero
                    if ($('#Previous').css("visibility") == "hidden") { // if previous button is hidden
                        $('#Previous').css("visibility", "visible"); //set it to visible
                    }
                }
                if (ImageIndex == lengthImages - BottomLength) { // check whether the 
                                // slider has come to end or not
                    if ($('#Next').css("visibility") == "visible") { // if visible
                        $('#Next').css("visibility", "hidden"); // hide next button
                    }
                }
            }
            else { // if bottom slider has come to end
                $('#MainImage').attr('src', Imagesrc); // set the image source only.
                            // No need to update the image index
            }
            }).fadeIn(1000);
    });