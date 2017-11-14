Pixastic.Effects = (function() {

    return {
		morph : function(inData, outData, width, height, options, progress) {
            var r=0, g=0, b=0, c, y, x, x1, y1, idx;
			var F = Math.max;
			for (y = 1; y < height - 1; y++) {
				for (x = 1; x < width - 1; x++) {
					idx = (x + y * width) * 4;

					for (y1 = y - 1; y1 <= y + 1; y1++) {
						if ((y1 < 0) || (y1 > height)) continue;
						for (x1 = x - 1; x1 <= x + 1; x1++) {
							if ((x1 < 0) || (x1 > width)) continue;
							idx1 = (x1 + y1 * width) * 4;
							if ((idx1 > outData.length) || (idx1 < 0 )) continue;
							
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

				}
			}
		} 

    }
})();
