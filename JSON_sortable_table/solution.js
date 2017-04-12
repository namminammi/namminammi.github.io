function CreateTableFromJSON() {
    var myItems = [{ "first_name": "Billy", "last_name": "Campbell", "phone": "62-(500)527-5325" }, { "first_name": "Jonathan", "last_name": "Black", "country": "Russia", "phone": "7-(729)811-4597" }, { "first_name": "cheryl", "last_name": "Harvey", "country": "Indonesia", "phone": "62-(825)454-3810" }, { "first_name": "Cynthia", "last_name": "Cooper" }, { "first_name": "Thomas", "last_name": "Stevens", "phone": "86-(527)535-8464" }, { "first_name": "Jane", "last_name": "Chavez", "country": "Netherlands" }, { "first_name": "bobby", "last_name": "Price", "country": "China", "phone": "86-(898)723-6749" }, { "first_name": "Steve", "last_name": "Hansen", "phone": "93-(362)494-5552" }, { "first_name": "Alan", "last_name": "Cruz", "country": "Philippines", "phone": "63-(617)248-8832" }, { "first_name": "Dennis", "last_name": "Baker", "country": "Iran", "phone": "98-(436)329-3723" }, { "first_name": "Ernest", "last_name": "Bishop", "phone": "86-(566)429-1138" }, { "first_name": "Russell", "last_name": "Meyer", "phone": "62-(687)827-4302" }, { "first_name": "Ryan", "last_name": "Mendoza", "country": "Poland", "phone": "48-(537)109-0373" }, { "first_name": "Maria", "last_name": "Greene", "phone": "92-(831)367-8049" }, { "first_name": "Elizabeth", "last_name": "Moore", "country": "Philippines", "phone": "63-(694)844-9255" }, { "first_name": "Ronald", "last_name": "kim", "phone": "46-(339)931-9221" }, { "first_name": "Samuel", "last_name": "Jacobs", "country": "Russia", "phone": "7-(936)156-5229" }, { "first_name": "Fred", "last_name": "Ross", "phone": "55-(594)481-7354" }, { "first_name": "Andrew", "last_name": "Burns", "country": "Portugal", "phone": "351-(174)443-8706" }, { "first_name": "Robert", "last_name": "Frazier", "country": "Somalia" }]

    /*var myItems = [{ "company_name": "Medline Industries, Inc.", "product": "Benzalkonium Chloride", "price": "481.63" }, { "company_name": "PD-Rx Pharmaceuticals, Inc.", "product": "Alprazolam", "price": "167.62", "fda_date_approved": "02/12/2015" }, { "company_name": "West-ward Pharmaceutical Corp.", "product": "Flumazenil", "fda_date_approved": "23/04/2015" }, { "company_name": "HyVee Inc", "product": "Aspirin", "price": "218.32", "fda_date_approved": "26/07/2015" }, { "company_name": "Aurobindo Pharma Limited", "product": "carisoprodol", "price": "375.58", "fda_date_approved": "28/11/2014" }, { "company_name": "Apotex Corp", "product": "Risperidone", "price": "213.49", "fda_date_approved": "06/11/2015" }, { "company_name": "Unit Dose Services", "product": "Lovastatin", "price": "169.14", "fda_date_approved": "14/09/2015" }, { "company_name": "Jubilant HollisterStier LLC", "product": "Dog Hair Canis spp.", "fda_date_approved": "31/12/2014" }, { "company_name": "AAA Pharmaceutical, Inc.", "product": "ACETAMINOPHEN, CHLORPHENIRAMINE MALEATE, DEXTROMETHORPHAN HYDROBROMIDE, and PHENYLEPHRINE HYDROCHLORIDE", "price": "183.33", "fda_date_approved": "13/12/2015" }, { "company_name": "AKG Innovations LLC", "product": "AVOBENZONE, OCTINOXATE, OCTISALATE", "fda_date_approved": "22/01/2015" }, { "company_name": "hikma Farmaceutica", "product": "Oxytocin" }, { "company_name": "prime Packaging, Inc.", "product": "Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone", "price": "208.17" }, { "company_name": "Davion, Inc", "product": "Triclosan", "price": "80.30", "fda_date_approved": "13/12/2014" }, { "company_name": "CARDINAL HEALTH", "product": "CARBOXYMETHYLCELLULOSE SODIUM, GLYCERIN", "price": "330.22", "fda_date_approved": "11/08/2015" }, { "company_name": "Amgen Inc", "product": "darbepoetin alfa", "price": "332.28", "fda_date_approved": "01/07/2015" }, { "company_name": "Autumn Harp, Inc.", "product": "Salicylic Acid", "price": "34.43", "fda_date_approved": "25/03/2015" }, { "company_name": "American Regent, Inc.", "product": "sodium phosphate, monobasic, monohydrate and sodium phosphate, dibasic anhydrous", "price": "11.60" }, { "company_name": "J. A. Cosmetics U.S. INC", "product": "TITANIUM DIOXIDE", "price": "130.90", "fda_date_approved": "01/12/2015" }, { "company_name": "NATURE REPUBLIC CO., LTD.", "product": "Titanium Dioxide, OCTINOXATE, Zinc Oxide", "price": "124.48" }, { "company_name": "L. Perrigo Company", "product": "Dextromethorphan Hydrobromide, Guaifenesin", "price": "73.09", "fda_date_approved": "03/02/2016" }]
*/

    // Extracting info for table header 

    var col = [];
    for (var i = 0; i < myItems.length; i++) {
        for (var key in myItems[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Table
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);

    // Table header
    var trHead = thead.insertRow(-1);
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        trHead.appendChild(th);
    }

    // Json data to the rows
    for (var i = 0; i < myItems.length; i++) {

        tr = tbody.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myItems[i][col[j]];
        }
    }

    // Table to HTML
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

    var asc1 = 1,
        asc2 = 1,
        asc3 = 1,
        asc4 = 1;

    function sort_table(tbody, col, asc) {
        var rows = tbody.rows,
            rlen = rows.length,
            arr = new Array(),
            i, j, cells, clen;

        // values from table
        for (i = 0; i < rlen; i++) {
            cells = rows[i].cells;
            clen = cells.length;
            arr[i] = new Array();
            for (j = 0; j < clen; j++) {
                arr[i][j] = cells[j].innerHTML;
            }
        }
        // sort array
        arr.sort(function(a, b) {
            return (a[col].toLowerCase() == b[col].toLowerCase()) ? 0 : ((a[col].toLowerCase() > b[col].toLowerCase()) ? asc : -1 * asc);
        });
        // replace old rows with new
        for (i = 0; i < rlen; i++) {
            rows[i].innerHTML = "<td>" + arr[i].join("</td><td>") + "</td>";
        }
    }

    var tableHeadCell0 = document.getElementsByTagName("th")[0];
    var tableHeadCell1 = document.getElementsByTagName("th")[1];
    var tableHeadCell2 = document.getElementsByTagName("th")[2];
    var tableHeadCell3 = document.getElementsByTagName("th")[3];

    tableHeadCell0.addEventListener("click", sorting0);
    tableHeadCell1.addEventListener("click", sorting1);
    tableHeadCell2.addEventListener("click", sorting2);
    tableHeadCell3.addEventListener("click", sorting3);


    function sorting0() {
        sort_table(tbody, 0, asc1);
        asc1 *= -1;
        asc2 = 1;
        asc3 = 1;
    }

    function sorting1() {
        sort_table(tbody, 1, asc2);
        asc2 *= -1;
        asc3 = 1;
        asc1 = 1;
    }

    function sorting2() {
        sort_table(tbody, 2, asc3);
        asc3 *= -1;
        asc1 = 1;
        asc2 = 1;
    }


    function sorting3() {
        sort_table(tbody, 3, asc4);
        asc4 *= -1;
        asc1 = 1;
        asc2 = 1;
    }


    /////end of funciton////
}

CreateTableFromJSON();
