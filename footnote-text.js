const footnoteText = {
  1: 'Alabama Department of Education, <i>History of Education in Alabama: A Bicentennial Intern Project, Bulletin no. 7 </i>(Alabama Department of Education, 1975), 43-46.',
  2: 'Lee Clark Cain, “Alabama Public School Progress Under the Governorship of David Bibb Graves.” (Ed.D. diss., University of Alabama, 1962), 47, 50-51.',
  3: '<i>Montgomery Advertiser,</i> 5 September 1927.',
  4: 'Alabama Department of Education, <i>Alabama Department of Education Annual Report for the Scholastic Year Ending September 30, 1927</i> (Birmingham: Birmingham Printing Co., 1927), 19-20; and Cain, “Public School Progress,” 64.',
  5: '<i>Montgomery Advertiser,</i> 3 September 1927.',
  6: 'Cain, “Public School Progress,” 76.',
  7: '<i>Montgomery Advertiser,</i> 3 September 1927',
  8: '<i>Montgomery Advertiser,</i> 6 August 1927 and 13 August 1927.',
  9: 'Cain, “Public School Progress,” 79.',
  10: 'E.M. Shackelford, <i>First Fifty Years of the State Teachers College at Troy, Alabama, 1887-1937</i> (Montgomery, Ala.: Paragon Press, 1937), 84-85.',
  11: 'Cain, “Public School Progress,” 79.',
  12: '<i>Montgomery Advertiser,</i> 29 July 1927.',
  13: 'Cain, “Public School Progress,” 95.',
  14: 'Cain, “Public School Progress,” 118-119.',
  15: '<i>Montgomery Advertiser,</i> 8 August 1927.',
  16: 'Cain, “Public School Progress,” 120; and <i>Montgomery Advertiser,</i> 9 January 1928.',
  17: '“Shall We Saddle Another $20,000,000 of Bonds on the Taxpayers of Alabama?” pamphlet in the George Petrie Collection, Folder 1214, Auburn University Special Collections, Ralph Brown Draughon Library, Auburn, Ala.',
  18: '<i>Montgomery Advertiser,</i> 8 August 1927.',
  19: '<i>Montgomery Advertiser,</i> 12 January 1928.',
  20: 'Department of Education, <i>Annual Report for 1927,</i> 13-14.',
  21: '<i>Montgomery Advertiser,</i> 2 September 1927.',
  22: 'Department of Education, <i>Annual Report for 1927</i>, 13-14.',
  23: 'Cain, “Public School Progress,” 136.',
  24: 'Susan L. Klaus, “Olmsted, Frederick Law, Jr.,” in <i>Pioneers of American Landscape Design,</i> eds. Charles Birnbaum and Robin Karson (New York: McGraw Hill, 2000) 273.',
  25: 'Lee Hall, <i>Olmsted’s America: An “Unpractical” Man and His Vision of Civilization</i> (Boston, New York, Toronto and London: Little, Brown and Company, 1995), 193-199.',
  26: 'Klaus, “Olmsted, Frederick Law, Jr.,” 273.',
  27: 'Arelyn Levee, “Olmsted, John Charles,” in <i>Pioneers of American Landscape Design,</i> eds. Charles Birnbaum and Robin Karson (New York: McGraw Hill, 2000) 284.',
  28: 'Klaus, “Olmsted, Frederick Law, Jr.,” 273, and Levee, “Olmsted, John Charles,” 282.',
  29: 'Levee, “Olmsted, John Charles,” 284.',
  30: 'Mary Walton Upchurch, “Great and Illustrious Work: The 1930 Olmsted Plan for the State Capitol,” <i>Alabama Heritage</i> 68 (2003): 41.',
  31: 'Olmsted Brothers [Frederick Law Olmsted, Jr.], “Report on Methodist College for Women, Montgomery, Alabama,” 17 October 1908, Methodist Depository, Houghton Memorial Library, Huntingdon College, Montgomery, Ala.',
  32: 'Olmsted Brothers [Frederick Law Olmsted, Jr.], “Country Club, Montgomery, Alabama: Report on Treatment of Grounds,” 28 October 1908, Olmsted Associates Records, Series B (“Correspondence Files”), Microfilm Reel #209, Library of Congress, Washington, D.C.',
  33: 'Olmsted Associates Records, Series B (“Correspondence Files”), Microfilm Reel #209, Library of Congress, Washington, D.C.',
  34: 'Olmsted Brothers, <i>A System of Parks and Playgrounds for Birmingham,</i> Davis Library Special Collections, Samford University, Birmingham, Ala.',
  35: 'Telegram, Gov. Bibb Graves to Olmsted Brothers, 24 January 1928, Gov. Bibb Graves Administrative Files, SG 21167, Folder 12, Alabama Department of Archives and History, Montgomery, Ala. (Hereafter referred to as “ADAH.”)',
  36: 'Telegram, Gov. Bibb Graves to Olmsted Brothers, 8 June 1928, Gov. Bibb Graves Administrative Files, SG 21167, Folder 12, ADAH.',
  37: '“Voucher—Office of the State Auditor,” 21 July 1928, Gov. Bibb Graves Administrative Files, SG 21167, Folder 11, ADAH.',
  38: 'Contract between Board of Education of the State of Alabama and Olmsted Brothers, 1 August 1928, Gov. Bibb Graves Administrative Files, ADAH.',
  39: 'Henry J. Willingham to Gov. Bibb Graves, 16 July 1928, Gov. Bibb Graves Administrative Files, ADAH.',
  40: 'James Frederick Dawson (Olmsted Brothers) to Gov. Bibb Graves, 7 July 1928 and Olmsted Brothers to Gov. Bibb Graves, 8 August 1928, Gov. Bibb Graves Administrative Files, SG 21167, Folder 12, ADAH.',
  41: 'Gov. Bibb Graves to O.C. Carmichael (Alabama College for Women), Dr. George H. Denny (University of Alabama), and Dr. Bradford Knapp (Alabama Polytechnic Institute), 11 July 1928, Gov. Bibb Graves Administrative Files, SG 21167, Folder 12, ADAH.',
  42: 'Bradford Knapp to Gov. Bibb Graves, 22 August 1928, Gov. Bibb Graves Administrative Files, ADAH.',
  43: '<i>University of Montevallo Trustees Minutes</i> vol. 4, 4 October 1928, Carmichael Library, University of Montevallo, 159.',
  44: '<i>Minutes of the Board of Trustees, Alabama Polytechnic Institute,</i> 3 August 1928, Auburn University Special Collections, Ralph Brown Draughon Library, Auburn, Ala., 231-232; and “Supplement to the Annual Report 1928-1929,” <i>University of Montevallo Trustees Minutes</i> vol. 4, 11 June 1929, Carmichael Library, University of Montevallo, Montevallo, Ala.,159.',
  45: '<i>Minutes of the Exec Committee of the Board of Trustees,</i> 1917-1928, 28 May 1928, W.S. Hoole Special Collections Library, University of Alabama, Tuscaloosa, Ala., 542.',
  46: 'Dr. George H. Denny to Olmsted Brothers, 13 July 1928, Gov. Bibb Graves Administrative Files, SG 21167, Folder 12, ADAH.',
  47: 'Hill Ferguson to Gov. Bibb Graves, 6 June 1928, Gov. Bibb Graves Administrative Files, ADAH.',
  48: 'John M. Schnorrenberg, <i>Remembered Past, Discovered Future: The Alabama Architecture of Warren Knight and Davis, 1906-1961</i> (Birmingham, Ala.: Birmingham Museum of Art, 1999) 13.',
  49: 'Ibid., 27, 41-42, 46, 102.',
  50: 'Ibid., 37-38, 46-47.',
  51: 'Ibid., 96.',
  52: 'Ibid., 53.',
  53: 'Ibid., 15, 21-22, 24.',
  54: 'Ibid., 32.',
  55: 'Ibid., 61, 57, 64-66.',
  56: 'Ibid., 96, 101, and Anne Hoover Henderson, “Olmsted Brothers Campus Design Survey,” [1992], Alabama Historical Commission, Montgomery, Ala.',
  57: 'Leon H. Zach (Olmsted Brothers) to Dr. Henry J. Willingham (Florence State Normal School), 16 July 1928, Olmsted Associates Records, Series B (“Correspondence Files”), Microfilm Reel #414, Library of Congress, Washington, D.C. (Hereafter referred to as “Olmsted Correspondence.”)',
  58: 'John E. Davis to Harwell G. Davis (Howard College), 21 December 1945, Harwell G. Davis Papers, SC 4137, Box 2, Folder 25, Davis Library Special Collections, Samford University, Birmingham, Ala.',
  59: 'Mary Walton Upchurch, “Great and Illustrious Work: The 1930 Olmsted Plan for the State Capitol,” <i>Alabama Heritage</i> 68 (2003): 36.',
  60: 'Schnorrenberg, <i>Remembered Past,</i> 47.',
  61: 'James F. Dawson (Olmsted Brothers) to John E. Davis, 10 February 1939; John E. Davis to James F. Dawson, 22 April 1939; James F. Dawson to John E. Davis, 6 January 1941; Carl Rust Parker (Olmsted Brothers) to John E. Davis, 4 March 1948; Olmsted Correspondence.',
  62: 'Alabama Department of Education, Alabama Department of Education Annual Report for the Scholastic Year Ending September 30, 1929 (Birmingham: Birmingham Printing Co., 1929), 13-14.',
  63: 'Gov. Bibb Graves to G.W. Brock, Gov. Bibb Graves Administrative Files, SG 21167, Folder 12, ADAH.',
  64: 'Petition, Alabama Polytechnic Institute students to Gov. Bibb Graves, 23 May 1927, Gov. Bibb Graves Administrative Files, SG 21170, Folder 32; ADAH.',
  65: 'Frederick Law Olmsted, Jr. to C.W. Daughette (Jacksonville State Normal School), 16 October 1933; Frederick Law Olmsted, Jr. to H. Councill Trenholm (Montgomery State Normal School) 17 October 1933; Frederick Law Olmsted, Jr. to G.W. Brock (Livingston Normal School), 17 October 1933; Olmsted Correspondence.',
  66: 'Susan L. Klaus, “All in the Family: The Olmsted Office and the Business of Landscape Architecture,” <i>Landscape Journal</i> 16 (Spring 1997): 92.',
  67: 'Ibid., 88-89, and Leon H. Zach to G.W. Jones and Sons (Huntsville, Ala.), 6 July 1929, Olmsted Correspondence.',
  68: 'Ibid., 87.',
  69: '“University of North Alabama Virtual Tour,” available from http://www2.una.edu/geography/ virtual_tour_page/; accessed 1 December 2004; and Henry J. Willingham to Olmsted Brothers, 25 July 1928, Olmsted Correspondence.',
  70: '</a>Shackelford, <i>First Fifty Years of the State Teachers College,</i> 162.',
  71: 'Olmsted Brothers, “Florence Ala. State Normal School: Data From First Visit,” 29 June 1928, Olmsted Correspondence; and “University of North Alabama Virtual Tour.”',
  72: 'Olmsted Brothers [Carl Rust Parker] to Houston Cole (President, Jacksonville State Teachers College), 4 October 1944, Olmsted Correspondence; and Olmsted Brothers, “General Plan for Florence State Teachers College” (7965-33), July 1929, Frederick Law Olmsted National Historic Site, Brookline, Mass.',
  73: 'Henry J. Willingham to Gov. Bibb Graves, 16 July 1928, Gov. Bibb Graves Administrative Files, SG 21167, Folder 12; ADAH; Henry J. Willingham to Olmsted Brothers, 3 January 1929; Henry J. Willingham to Olmsted Brothers, 22 July 1929; Henry J. Willingham to Olmsted Brothers, 5 August 1929; Olmsted Correspondence.',
  74: 'Henry J. Willingham to Olmsted Brothers, 5 August 1929, Olmsted Correspondence.',
  75: 'University of North Alabama History and Political Science Department, “Historic UNA,” available from http://www2.una.edu/history/unaimagemap.htm; accessed 1 December 2004.',
  76: 'Olmsted Brothers, “General Plan for Florence State Teachers College.”',
  77: 'History and Political Science Department, “Historic UNA.”',
  78: 'Olmsted Brothers to Henry J. Willingham, 17 July 1928, Olmsted Correspondence.',
  79: 'Henry J. Willingham to Olmsted Brothers, 6 August 1928, Olmsted Correspondence; and History and Political Science Department, “Historic UNA.”',
  80: 'Olmsted Brothers to Henry J. Willingham, 4 September 1928; Henry J. Willingham to Olmsted Brothers, 7 September 1928; Olmsted Correspondence.',
  81: '“University of North Alabama Campus Map,” available from http://www.una.edu/maps/; accessed 1 December 2004.',
  82: 'Leon H. Zach to Henry J. Willingham, 29 June 1929, Olmsted Correspondence.',
  83: 'University of North Alabama Office of University Relations, “Harrisons to Give UNA $500,000 For a Fountain and a Plaza,” 10 November 2000, available from http://www2.una.edu/universityrelations/November2000.htm; accessed 1 December 2004; and “University of North Alabama Virtual Tour.”',
  84: 'Henry J. Willingham to Olmsted Brothers, 3 July 1928; Henry J. Willingham to Olmsted Brothers, 1 January 1931; Leon H. Zach to Henry J. Willingham, 13 January 1931; Henry J. Willingham to James F. Dawson, 27 April 1931; A.F. Dittmar (Architect, Ala. Dept. of Education) to Olmsted Brothers, 22 May 1930; Olmsted Correspondence; and Department of History and Political Science, “Historic UNA.”',
  85: 'Henry J. Willingham to Olmsted Brothers, 19 September 1930, Olmsted Correspondence.',
  86: 'Olmsted Brothers to Henry J. Willingham, 17 December 1931, Gov. Bibb Graves Administrative Files, SG19948, Folder 19; ADAH; and Edward Clark Whiting (Olmsted Brothers) to Rushton, Crenshaw & Rushton (Montgomery, Ala.), 3 August 1933, Olmsted Correspondence.',
  87: 'Henry J. Willingham to J.H. Hard, Jr. (Chief Examiner of Accounts, State of Alabama), 9 February 1932, Gov. Bibb Graves Administrative Files, SG19948, Folder 19; ADAH.',
  88: 'Olmsted Brothers, “Jacksonville, Ala. State Normal School: Data From First Visit,” 22 June 1928; C.W. Daughette to Olmsted Brothers, 27 August 1928; Olmsted Correspondence.',
  89: 'Olmsted Brothers, “General Plan for Jacksonville State Teachers College” (7963-35), February 1930, Frederick Law Olmsted National Historic Site, Brookline, Mass.',
  90: 'Leon H. Zach to C.W. Daughette, 18 March 1930, Olmsted Correspondence.',
  91: 'Olmsted Brothers [Carl Rust Parker] to Houston Cole, 14 October 1944, Olmsted Correspondence.',
  92: 'C.W. Daughette to Olmsted Brothers, 17 March 1930; Leon H. Zach to C.W. Daughette, 18 March 1930; Olmsted Correspondence.',
  93: 'Alabama Department of Education, <i>Alabama Department of Education Annual Report for the Scholastic Year Ending September 30, 1928</i> (Birmingham: Birmingham Printing Co., 1928), 48.',
  94: 'Olmsted Brothers, “Livingston, Ala. State Normal School: Data From First Visit,” 23 June 1928, Olmsted Correspondence; University of West Alabama Admissions Office, “Virtual Tour,” available from http://tour.uwa.edu/; accessed 4 December 2004; and Olmsted Brothers, “General Plan for Livingston State Teachers College” (7964-28), January 1930, Frederick Law Olmsted National Historic Site, Brookline, Mass.',
  95: 'University of West Alabama Admissions Office, “Virtual Tour.”',
  96: 'G.W. Brock to Olmsted Brothers, 19 November 1929; “Report of E.T. Mische,” 4 April 1930; Olmsted Correspondence.',
  97: 'G.W. Brock to Olmsted Brothers, 8 December 1931; James F. Dawson to A.F. Harman, 17 December 1931; Olmsted Correspondence.',
  98: 'A.F. Harman to Olmsted Brothers, 6 January 1932, Olmsted Correspondence.',
  99: 'University of West Alabama, “History,” in <i>2004-2005 Undergraduate Catalogue</i>; available from http://catalog.uwa.edu/; accessed 4 December 2004; W.W. Hill to Olmsted Brothers, 7 July 1947, Olmsted Correspondence; and “Pre-Cataloging Inventory: Livingston Normal School” (7964), April 1992, Frederick Law Olmsted National Historic Site, Brookline, Mass.',
  100: 'Henderson, “Campus Design Survey.”',
  101: 'Allen L. Bartlett (Warren, Knight and Davis) to H. Councill Trenholm, 29 April 1929, Olmsted Correspondence.',
  102: 'Olmsted Brothers, “General Plan for State Teachers College for Negroes” (7961-1014), September 1929, Frederick Law Olmsted National Historic Site, Brookline, Mass.',
  103: 'Ibid.',
  104: 'Henderson, “Campus Design Survey.”',
  105: 'Olmsted Brothers, “General Plan for State Teachers College for Negroes.”',
  106: 'E.T. Mische to H. Councill Trenholm, 26 February 1930, Olmsted Correspondence.',
  107: 'H. Councill Trenholm to Olmsted Brothers, 3 March 1930, Olmsted Correspondence.',
  108: 'E.T. Mische, “Report of E.T. Mische: Montgomery Negro College,” 4 April 1930, Olmsted Correspondence.',
  109: 'Shackelford, <i>First Fifty Years of the State Teachers College at Troy,</i> 63; and Troy State Athletics, “2004 Softball Media Guide,” available from http://www.troystate.com/04SBMG.pdf; accessed 4 December 2004, p. 5.',
  110: 'E.M. Shackelford to Olmsted Brothers, 7 August 1922, in Olmsted Associates Records, Series B (“Correspondence Files”), Microfilm Reel #356, Library of Congress, Washington, D.C.',
  111: 'Edward Clark Whiting (Olmsted Brothers) to E.M. Shackelford, 10 August 1922, in Olmsted Associates Records, Series B (“Correspondence Files”), Microfilm Reel #356, Library of Congress, Washington, D.C; and Olmsted Research Guide Online.',
  112: 'Shackelford, State Teachers College at Troy, 67-71.',
  113: 'Ibid., 67-68.',
  114: 'Olmsted Brothers, “General Plan for Troy State Teachers College” (7962-48), April 1930, Frederick Law Olmsted National Historic Site, Brookline, Mass.',
  115: 'James F. Dawson to E.M. Shackelford, 11 July 1935, Olmsted Correspondence, Library of Congress, Washington, D.C; and Olmsted Brothers, “General Plan for Troy State Teachers College.”',
  116: 'Olmsted Brothers, “General Plan for Troy State Teachers College.”',
  117: 'Leon H. Zach to E.M. Shackelford, 26 June 1929, Olmsted Correspondence.',
  118: 'Shackelford, <i>State Teachers College at Troy,</i> 73-75.',
  119: 'Ibid., 70-72.',
  120: 'Olmsted Brothers, “General Plan for Troy State Teachers College.”',
  121: 'Troy State University, “Campus Tour,” available from http://www.troyst.edu/abouttsu/campustour/index.html, accessed 6 November 2004.',
  122: 'James F. Dawson to E.M. Shackelford, 11 July 1935; James F. Dawson to John E. Davis, 11 July 1935; Olmsted Correspondence.',
  123: 'Troy State University, “Campus Tour.”',
  124: 'R.E. Tidwell, “Agricultural & Mechanical Institute at Normal, Alabama: Proposed Program of Development,” circa 1928, Olmsted Correspondence.',
  125: 'Richard D. Morrison, <i>History of Alabama A&M University: 1875-1992</i> (Huntsville, Ala.: Golden Rule Printers, 1994), 157, 162-163, 168, 178.',
  126: 'Tidwell, “Proposed Program of Development.”',
  127: 'Olmsted Brothers, “General Plan for Agricultural and Mechanical College” (7966-1926), 17 April 1930, Frederick Law Olmsted National Historic Site, Brookline, Mass.; and Morrison, History of Alabama A&M University, 173.',
  128: 'Morrison, <i>History of Alabama A&M University,</i> 174; and Tidwell, “Proposed Program of Development.”',
  129: 'Morrison, <i>History of Alabama A&M University,</i> 177, 179.',
  130: 'Alabama A&M University, “Undergraduate Bulletin 2000-2002,” available from http://www.aamu.edu/ Catalog/General Info.pdf; accessed 1 December 2004, 11.',
  131: 'Lucille Griffith, <i>Alabama College, 1899-1969</i> (Montevallo, Ala., 1969), 83.',
  132: 'Ibid., 88.',
  133: '<i>University of Montevallo Trustees Minutes,</i> vol. 4, 25 May 1928, Carmichael Library, University of Montevallo, 143.',
  134: 'Griffith, <i>Alabama College,</i> 84; and Lucille Griffith, <i>White Columns and Red Brick: The University of Montevallo Buildings</i> (Montevallo, Ala.: The University, 1987), 18, 22.',
  135: 'O.C. Carmichael to James F. Dawson, 19 December 1928, Olmsted Correspondence; and Griffith, <i>White Columns and Red Brick,</i> 84, 91.',
  136: '<i>University of Montevallo Trustees Minutes,</i> vol. 4, 14 May 1928, Carmichael Library, University of Montevallo, 139-140.',
  137: 'O.C. Carmichael to James F. Dawson, 19 December 1928; “Alabama College: Data From First Visit,” circa June 1928; Olmsted Correspondence.',
  138: 'James F. Dawson to O.C. Carmichael, 5 September 1929, Olmsted Correspondence.',
  139: 'L.H. Zach to O.C. Carmichael, 25 September 1933, Olmsted Correspondence.',
  140: 'Griffith, <i>White Columns and Red Brick,</i> 30.',
  141: 'Ibid., 30, 37, 64-65.',
  142: 'Ibid., 25; and <i>University of Montevallo Trustees Minutes,</i> vol. 4, 7 February 1929, Carmichael Library, University of Montevallo, 161.',
  143: 'Bradford Knapp to Olmsted Brothers, 27 August 1928, Olmsted Correspondence; and William H. Kessler and E.B. Cooke, “Alabama Polytechnic Institute, Preliminary Plan of Buildings and Grounds,” n.d., Gov. Bibb Graves Administrative Files, SG 21167, Folder 13; ADAH.',
  144: 'Bradford Knapp to Olmsted Brothers, 27 August 1928, Olmsted Correspondence; and “Plans for Financing Building Program, Alabama Polytechnic Institute 1928-1931,” 17 October 1929, Gov. Bibb Graves Administrative Files, SG 21171, Folder 10; ADAH.',
  145: '<i>Minutes of the Board of Trustees, Alabama Polytechnic Institute,</i> 18 October 1929, Auburn University Special Collections, Ralph Brown Draughon Library, Auburn, Ala.',
  146: 'Schnorrenberg, <i>Remembered Past,</i> 101; and Olmsted Brothers, “General Plan for Alabama Polytechnic Institute” (7969-102), September 1929, Frederick Law Olmsted National Historic Site, Brookline, Mass.',
  147: 'Bradford Knapp to Olmsted Brothers, 6 February 1929, Olmsted Correspondence.',
  148: 'Bradford Knapp to Olmsted Brothers, 4 May 1929, Olmsted Correspondence.',
  149: '“Report of the President to the Board of Trustees,” <i>Minutes of the Board of Trustees, Alabama Polytechnic Institute,</i> June 1931, Auburn University Special Collections, Ralph Brown Draughon Library, Auburn, Ala.',
  150: 'R.G. Millman, <i>The Auburn University Walking Tour Guide</i> (Tuscaloosa, Ala.: University of Alabama Press, 1991), 33, 36, 64; and Auburn University Agricultural Heritage Park, available from http://www.ag.auburn.edu/heritagepark/index.html; accessed 3 December 2004.',
  151: 'Olmsted Brothers, “General Plan for Alabama Polytechnic Institute.”',
  152: 'Bradford Knapp to Olmsted Brothers, 1 October 1928, Olmsted Correspondence.',
  153: 'Olmsted Brothers, “General Plan for Alabama Polytechnic Institute,” and Millman, <i>Walking Tour Guide,</i> 43.',
  154: 'Bradford Knapp to Olmsted Brothers, 22 December 1928, Olmsted Correspondence.',
  155: 'Olmsted Brothers, “General Plan for Alabama Polytechnic Institute”; “Plans for Financing Building Program, Alabama Polytechnic Institute 1928-1931,” 17 October 1929, Gov. Bibb Graves Administrative Files, SG 21171, Folder 10; ADAH; and Bradford Knapp to Gov. Bibb Graves, 18 March 1929, Gov. Bibb Graves Administrative Files, SG 21171, Folder 10; ADAH.',
  156: 'Millman, <i>Walking Tour Guide,</i> 64, 101; Auburn University Libraries, “Jordan-Hare Stadium,” in Auburn University Buildings, available from http://www.lib.auburn.edu/arch/buildings/, accessed 7 November 2004; and Olmsted Brothers, “General Plan for Alabama Polytechnic Institute.”',
  157: 'Robert Oliver Mellown, <i>The University of Alabama: A Guide to the Campus</i> (Tuscaloosa, Ala. and London: The University of Alabama Press, 1988), 75, 78, 81, 88.',
  158: 'Ibid., 60, 75.',
  159: 'Ibid., 63, 75; and William H. Kessler and Louis Schillinger, “The University of Alabama: General Plan for Future Development,” January 1925, Gov. Bibb Graves Administrative Files, SG 21167, Folder 13; ADAH.',
  160: 'Mellown, <i>A Guide to the Campus,</i> 77, 94.',
  161: '“Pre-Cataloging Inventory: University of Alabama” (7967), March-April 1991, Frederick Law Olmsted National Historic Site, Brookline, Mass.',
  162: 'Mellown, <i>A Guide to the Campus,</i> 79, 81, 88.',
  163: '“Miller, Martin & Lewis,” Birmingham Architects Biographical Files, 886.1.55, Birmingham Public Library Archives, Birmingham, Ala.',
  164: 'Mellown, <i>A Guide to the Campus,</i> 77.',
  165: 'Hill Ferguson, Scrapbook No. 2, Box 136, Hill Ferguson Papers, W.S. Hoole Special Collections Library, University of Alabama, Tuscaloosa, Ala.',
  166: 'Mellown, <i>A Guide to the Campus,</i> 78, 89.',
  167: 'Ibid., 85, 86, 91.',
  168: 'James F. Dawson to Henry J. Willingham; Leon H. Zach to J.F. Drake; Leon H. Zach to Bradford Knapp; 8 August 1929, Olmsted Correspondence.',
  169: 'Leon H. Zach to H. Councill Trenholm; Leon H. Zach to C.W. Daughette; 3 March 1930, Olmsted Correspondence.',
  170: 'George H. Denny to Gov. Bibb Graves, 18 January 1930, Gov. Bibb Graves Administrative Files, SG 21170, Folder 47; ADAH.',
  171: '<i>Minutes of the Board of Trustees, Alabama Polytechnic Institute,</i> 10 June 1929, Auburn University Special Collections, Ralph Brown Draughon Library, Auburn, Ala.',
  172: 'George H. Denny to Gov. Bibb Graves, 18 January 1930, Gov. Bibb Graves Administrative Files, SG 21170, Folder 47; ADAH.',
  173: 'James F. Dawson to Henry J. Willingham, 16 September 1930, Olmsted Correspondence.',
  174: 'Department of Education, <i>Annual Report for 1927,</i> 54-55.',
  175: 'George H. Denny to Gov. Bibb Graves, 18 January 1930, Gov. Bibb Graves Administrative Files, SG 21170, Folder 47; and Bradford Knapp to Gov. Bibb Graves, 11 December 1930, Bibb Graves Administrative Files, SG 21170, Folder 34; ADAH.',
  176: 'James B. Sellers, “History of the University of Alabama, Vol. II: 1902-1957, 1975 (?),” Ed. W. Stanley Hoole, p. 42, W.S. Hoole Special Collections Library, University of Alabama, Tuscaloosa, Ala.',
  177: 'Bradford Knapp to Gov. Bibb Graves, 3 December 1929, Bibb Graves Administrative Files, SG 21170, Folder 33; ADAH.',
  178: 'Bradford Knapp to Gov. Bibb Graves, 19 April 1930, Bibb Graves Administrative Files, SG 21170, Folder 34; ADAH.',
  179: 'Department of Education, “History of Education in Alabama,” 49.',
  180: 'William Warren Rogers, Robert David Ward, Leah Rawls Atkins, and Wayne Flynt, <i>Alabama: The History of a Deep South State</i> (Tuscaloosa and London: The University of Alabama Press, 1994), 424, 497.',
  181: 'Department of Education, “History of Education in Alabama,” 50.',
  182: 'Rogers, <i>History of a Deep South State,</i> 498.',
  183: 'Shackelford, <i>State Teachers College at Troy,</i> 110-111, 168.',
  184: 'Olmsted Brothers to C.W. Daughette, Bradford Knapp, and H. Councill Trenholm, 17 January 1931, Olmsted Correspondence.',
  185: 'Olmsted Brothers, “General Plan for Alabama Polytechnic Institute.”C.W. Daughette to Olmsted Brothers, 20 January 1931; O.C. Carmichael to Olmsted Brothers, 14 December 1931; and Henry J. Willingham to Olmsted Brothers, 7 December 1931, Olmsted Correspondence.',
  186: 'J.F. Drake to Olmsted Brothers, 7 December 1931; and Henry J. Willingham to Olmsted Brothers, 25 February 1932, Olmsted Correspondence.',
  187: 'Henry J. Willingham to Olmsted Brothers, 7 December 1931, Olmsted Correspondence.',
  188: 'Department of Education, “History of Education in Alabama,” 50.',
  189: 'Frederick Law Olmsted, Jr. to C.W. Daughette, 16 October 1933; and Frederick Law Olmsted, Jr. to H. Councill Trenholm and G.W. Brock, 17 October 1933, Olmsted Correspondence.',
  190: 'J.F. Drake to Olmsted Brothers, 6 April 1934; O.C. Carmichael to Olmsted Brothers, 9 April 1934; Henry Hughes (Brookline Trust Company) to Olmsted Brothers, 21 April 1934; C.W. Daughette to Olmsted Brothers, 10 April 1934; K.T. Tyree (Florence State Teachers College) to Olmsted Brothers; 16 April 1934, Olmsted Correspondence.',
  191: 'James F. Dawson to A.F. Harman, 23 July 1934; and John W. Crump to Olmsted Brothers, 2 November 1934, Olmsted Correspondence.',
  192: 'James F. Dawson to A.F. Harman, 22 January 1933, Olmsted Correspondence.',
  193: 'Olmsted Brothers, “General Plan for Alabama Polytechnic Institute.”John E. Davis to Gov. B.M. Miller, 6 April 1934, Olmsted Correspondence.',
  194: 'James F. Dawson to Henry J. Willingham, 16 September 1930; Olmsted Brothers to J.F. Drake, 30 July 1930; James F. Dawson to C.W. Daughette, 27 August 1930; Olmsted Correspondence.',
  195: 'Bill, Olmsted Brothers to Alabama College, 1 November 1933, and Leon H. Zach to O.C. Carmichael, 30 August 1933, Olmsted Correspondence.',
  196: 'James F. Dawson to J.F. Drake, 25 February 1931; and James F. Dawson to Roy S. Garrett, 30 September 1935, Olmsted Correspondence.',
  197: 'James F. Dawson to Henry J. Willingham, 18 January 1931; and James F. Dawson to J.F. Drake, 10 February 1929, Olmsted Correspondence.',
  198: 'J.A. Keller to James F. Dawson, 7 February 1939, Olmsted Correspondence.',
  199: 'James F. Dawson to J.A. Keller, 10 February 1939, Olmsted Correspondence.',
  200: 'Griffith, <i>White Columns and Red Brick,</i> 29.',
  201: 'Mary Frances Tipton, <i>Years Rich and Fruitful: University of Montevallo 1896-1996</i> (Montevallo, Ala.: The University, 1996), 62-63.',
  202: 'Griffith, <i>Alabama College,</i> 102.',
  203: 'John E. Davis (Warren, Knight and Davis) to James F. Dawson (Olmsted Brothers), 31 December 1940; Roy S. Garrett to Olmsted Brothers, 11 December 1935; E.M. Shackelford to Olmsted Brothers, 2 July 1935; and J.F. Drake to Olmsted Brothers, 14 February 1939, Olmsted Correspondence; and Jacksonville State University, <i>Fact Book</i> (Jacksonville, Ala.: The University, 1989), 45.',
  204: '<i>Encyclopædia Britannica,</i> 2004, "Public Works Administration."',
  205: 'Suzanne Rau Wolfe, <i>The University of Alabama: A Pictorial History</i> (Tuscaloosa, Ala.: The University of Alabama Press, 1983), 171.',
  206: 'Mickey Logue and Jack Simms, <i>Auburn: A Pictorial History of the Loveliest Village</i> (Auburn, Ala., 1996), 159; and Millman, <i>Walking Tour Guide,</i> 83.',
  207: 'Kraus, “All In the Family,” 94; and Schnorrenberg, <i>Remembered Past,</i> 108.',
  208: 'Carl Rust Parker to J.F. Drake, 29 January 1945; Carl Rust Parker to A.F. Harman, 29 March 1945; Olmsted Correspondence.',
  209: 'Auburn University Office of University Planning, “Master Plan,” in <i>Image and Character of Auburn University</i>; available from http://web1.duc.auburn.edu/academic/<br>provost/assoc_provost_facilities/<br>image_character/master.pdf; accessed 23 October 2004, p. 60; Troy State University Office of University Relations, “Troy University Dedicates New Quadrangle,” 23 April 2004; available from http://www.troyst.edu/news/archives/<br>april2004/quad.html; accessed 23 October 2004; and University of Montevallo, “History,” in <i>University of Montevallo Undergraduate Bulletin,</i> available from http://www.montevallo.edu/ undergrad/un.shtm; accessed 23 October 2004.',
};

export default footnoteText;
