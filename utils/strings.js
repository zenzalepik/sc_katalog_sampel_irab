const ARABIC_STRINGS = {
    LA_MAHALLA_LAHU: "لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ",
    LA_MAHALLA_LAHA: "لَا مَحَلَّ لَهَا مِنَ الْإِعْرَابِ"
};


/**
 * Returns the Arabic string for "La mahalla lahu/laha minal i'rab"
 * based on whether the word is masculine (lahu) or feminine (laha).
 * 
 * @param {boolean} isLahu - If true, returns masculine form (lahu). If false, returns feminine form (laha).
 * @returns {string} The appropriate Arabic string.
 */
function getKeteranganLaMahalla(isLahu = true) {
    return isLahu ? ARABIC_STRINGS.LA_MAHALLA_LAHU : ARABIC_STRINGS.LA_MAHALLA_LAHA;
}


/**
 * Returns the Arabic string for "La mahalla lahu/laha minal i'rab"
 * based on whether the word is masculine (lahu) or feminine (laha).
 * 
 * @param {boolean} isLahu - If true, returns masculine form (lahu). If false, returns feminine form (laha).
 * @returns {string} The appropriate Arabic string.
 */
function getKeteranganLaMahalla(isLahu = false) {
    return isLahu ? ARABIC_STRINGS.LA_MAHALLA_LAHU : ARABIC_STRINGS.LA_MAHALLA_LAHA;
}
