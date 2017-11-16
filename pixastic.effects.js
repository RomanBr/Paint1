Pixastic.Effects = (function() {
     return {
			Inv : function(inData, outData, width, height, options, progress) {
            var n = width * height * 4,
                prog, lastProg = 0;

				for (i=0;i<n;i+=4) {
					outData[i] = 255 - inData[i];
					outData[i+1] = 255 - inData[i+1];
					outData[i+2] = 255 - inData[i+2];
					outData[i+3] = 255;
					
				}
			}, 

		
		Neighbours : function(inData, outData, width, height, options, progress) {
            var r=[], g=[], b=[], y=1, x=1, x1, y1, idx;
			var prog, lastProg = 0, n = width * height * 4;

			var F = mathFun[options] //options.F;
			var d = 3;
			while (y++ < height) {
				while (x++ < width) {
					idx = (x + y * width) * 4;

					for (y1 = y - 1; y1 <= y + 1; y1++) {
						if ((y1 < 0) || (y1 > height)) continue;
						for (x1 = x - 1; x1 <= x + 1; x1++) {
							if ((x1 < 0) || (x1 > width)) continue;
							idx1 = (x1 + y1 * width) * 4;
							if ((idx1 > outData.length) || (idx1 < 0 )) continue;
							if ((mathFun.Manhattan(x, x1, y, y1) == 0) && (d < 0)) continue;
							if ((mathFun.Manhattan(x, x1, y, y1) != Math.abs(d)) && (Math.abs(d) <= 2)) continue; 

							r.push(inData[idx1 + 0]);
							g.push(inData[idx1 + 1]);
							b.push(inData[idx1 + 2]);

						}
					}

					outData[idx + 0] = F(r); // red
					outData[idx + 1] = F(g); // green
					outData[idx + 2] = F(b); // blue
					outData[idx + 3] = 255; // alpha
					
					var r = [], g = [], b = [];
					
					if (progress) {
						prog = (idx/n*100 >> 0) / 100;
						if (prog > lastProg) {
							lastProg = progress(prog);
						}
					}


				}
				x = 1;
			}
		}, 
		Neighbours1 : function(inData, outData, width, height, options, progress) {
            var r=0, g=0, b=0, y, x, x1, y1, idx;
			var prog, lastProg = 0, n = width * height * 4;

			var F = mathFun[options] //options.F;
			var d = 3;
			for (y = 1; y < height - 1; y++) {
				for (x = 1; x < width - 1; x++) {
					idx = (x + y * width) * 4;

					for (y1 = y - 1; y1 <= y + 1; y1++) {
						if ((y1 < 0) || (y1 > height)) continue;
						for (x1 = x - 1; x1 <= x + 1; x1++) {
							if ((x1 < 0) || (x1 > width)) continue;
							idx1 = (x1 + y1 * width) * 4;
							if ((idx1 > outData.length) || (idx1 < 0 )) continue;
							if ((mathFun.Manhattan(x, x1, y, y1) == 0) && (d < 0)) continue;
							if ((mathFun.Manhattan(x, x1, y, y1) != Math.abs(d)) && (Math.abs(d) <= 2)) continue; 

							r = F(r, inData[idx1 + 0]);
							g = F(g, inData[idx1 + 1]);
							b = F(b, inData[idx1 + 2]);
						}
					}

					outData[idx + 0] = r; // red
					outData[idx + 1] = g; // green
					outData[idx + 2] = b; // blue
					outData[idx + 3] = 255; // alpha
					
					var r = 0, g = 0, b = 0;
					
					if (progress) {
						prog = (idx/n*100 >> 0) / 100;
						if (prog > lastProg) {
							lastProg = progress(prog);
						}
					}


				}
			}
		}  

    }
})();
