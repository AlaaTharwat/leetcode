/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const n = image.length, m = image[0].length;
    const color = image[sr][sc];

    const dfs = (i,j) => {
        if(i<0 || i===n || j<0 || j===m || image[i][j] !== color || image[i][j] === newColor) return;

        image[i][j] = newColor;
        dfs(i+1, j)   
        dfs(i-1, j)    
        dfs(i, j-1)    
        dfs(i, j+1)    

    }

    dfs(sr, sc);
    return image
};
// @lc code=end

