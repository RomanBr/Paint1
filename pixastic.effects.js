Pixastic.Effects = (function() {

    return {

        morph : function(inData, outData, width, height, options, progress) {
            var r, g, b, c, y, x, x1, y1, idx,
                pyc, pyp, pyn,
                pxc, pxp, pxn,
                minR, minG, minB, maxR, maxG, maxB,
                n, prog, lastProg = 0;
                
            n = width * height * 4;
                
            for (y=0;y<height;y++) {
                for (x=0;x<width;x++) {
				r=0; b=0; g=0;
				for (y1=y-1;y1<y+2;y1++) {
					if (y1 < 0 || y1 > height) continue;
					for (x1=x-1; x1 < x+2;x1++) {
						if (x1 < 0 || x1 > width) continue;
						
						idx = (y1 * width + x1) * 4;
						if (idx < 0 || idx > width*height*4) continue;

						r = (r | inData[idx]);
						g = (g | inData[idx + 1]);
						b = (b | inData[idx + 2]);
                    }
				}
                    
                    outData[idx] = r;
                    outData[idx+1] = g;
                    outData[idx+2] = b;
                    outData[idx+3] = 255;
					
                }
            }
		} 
    }
})();
