    "use strict";

    const BASE_DATA = /* Kaynak çalışma kitaplarından oluşturuldu. */[{"id":1,"date":"2025-01-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV GERMAN","firm":"Blue Danube","country":"Rusya","tonnage":2320,"appearance":"SARI","metrics":{"ffa":1.43,"oil":43.17,"moisture":4.45,"impurity":0.13,"protein":12.75,"dust":6.08,"hectoliter":49.5,"core":90.28,"bran":3.51,"starch":null},"emtiaScore":92.4,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.43,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43.17,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.45,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":6.08,"op":"max","limit":3,"weight":15,"ratio":0.493421,"contribution":7.4}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":2,"date":"2025-01-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV TOYA","firm":"Adm","country":"Bulgaristan","tonnage":1878,"appearance":"BEYAZ","metrics":{"ffa":1.79,"oil":43.69,"moisture":5.28,"impurity":0.17,"protein":12.15,"dust":6.78,"hectoliter":44.54,"core":90.78,"bran":2.27,"starch":11.5},"emtiaScore":90.84,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.79,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43.69,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":5.28,"op":"max","limit":5,"weight":15,"ratio":0.94697,"contribution":14.2},{"key":"dust","label":"Toz","unit":"%","value":6.78,"op":"max","limit":3,"weight":15,"ratio":0.442478,"contribution":6.64}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":3,"date":"2025-01-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Cosecha","firm":"Cosecha","country":"Azerbaycan","tonnage":110,"appearance":"SARI","metrics":{"ffa":1.64,"oil":44.01,"moisture":4.15,"impurity":0.2,"protein":14.15,"dust":3.16,"hectoliter":42.53,"core":90.76,"bran":5.88,"starch":null},"emtiaScore":99.24,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.64,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.01,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.15,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":3.16,"op":"max","limit":3,"weight":15,"ratio":0.949367,"contribution":14.24}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":4,"date":"2025-01-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Asia Agro","firm":"Asia Agro","country":"Kazakistan","tonnage":103,"appearance":"SARI","metrics":{"ffa":1.55,"oil":42.43,"moisture":4.06,"impurity":0.16,"protein":11.5,"dust":6.12,"hectoliter":49.82,"core":90.44,"bran":3.28,"starch":null},"emtiaScore":92.35,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.55,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":42.43,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.06,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":6.12,"op":"max","limit":3,"weight":15,"ratio":0.490196,"contribution":7.35}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":5,"date":"2025-01-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Cosecha","firm":"Cosecha","country":"Özbekistan","tonnage":59.4,"appearance":"SARI","metrics":{"ffa":1.95,"oil":46.92,"moisture":3.56,"impurity":0.1,"protein":11.78,"dust":1.52,"hectoliter":49.56,"core":95.38,"bran":3,"starch":null},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.95,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":46.92,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":3.56,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":1.52,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":6,"date":"2025-01-01","year":2025,"sourceYear":2025,"commodity":"Soya Tohumu","vessel":"MV Halim M","firm":"Arista trading Ag","country":"Ukrayna","tonnage":10028,"appearance":"","metrics":{"ffa":0.6,"oil":21.54,"moisture":8.3,"impurity":1.67,"protein":33.46},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.6,"op":"max","limit":1.5,"weight":30,"ratio":1,"contribution":30},{"key":"oil","label":"Yağ","unit":"%","value":21.54,"op":"min","limit":18,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":8.3,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":33.46,"op":"min","limit":33,"weight":20,"ratio":1,"contribution":20},{"key":"impurity","label":"Empürite","unit":"%","value":1.67,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":7,"date":"2025-02-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV SAHİN 4","firm":"Adm","country":"Bulgaristan","tonnage":2253,"appearance":"BEYAZ","metrics":{"ffa":2.67,"oil":42.79,"moisture":5.02,"impurity":0.24,"protein":12.75,"dust":8.56,"hectoliter":39.82,"core":87.72,"bran":5.48,"starch":14},"emtiaScore":81.42,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.67,"op":"max","limit":2,"weight":35,"ratio":0.749064,"contribution":26.22},{"key":"oil","label":"Yağ","unit":"%","value":42.79,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":5.02,"op":"max","limit":5,"weight":15,"ratio":0.996016,"contribution":14.94},{"key":"dust","label":"Toz","unit":"%","value":8.56,"op":"max","limit":3,"weight":15,"ratio":0.350467,"contribution":5.26}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":8,"date":"2025-02-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Neva Leader 2","firm":"Blue Danube","country":"Rusya","tonnage":4969,"appearance":"SARI","metrics":{"ffa":1.61,"oil":44.29,"moisture":3.37,"impurity":0.22,"protein":12.41,"dust":6.53,"hectoliter":51.53,"core":85.13,"bran":1.95,"starch":null},"emtiaScore":91.89,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.61,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.29,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":3.37,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":6.53,"op":"max","limit":3,"weight":15,"ratio":0.459418,"contribution":6.89}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":9,"date":"2025-02-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Alaa M","firm":"Rogluten+Interstrach","country":"Ukrayna Romanya","tonnage":4671.16,"appearance":"SARI","metrics":{"ffa":2.65,"oil":41.06,"moisture":6.17,"impurity":0.24,"protein":11.58,"dust":13.28,"hectoliter":48.88,"core":85.1,"bran":1.37,"starch":null},"emtiaScore":76.19,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.65,"op":"max","limit":2,"weight":35,"ratio":0.754717,"contribution":26.42},{"key":"oil","label":"Yağ","unit":"%","value":41.06,"op":"min","limit":42,"weight":35,"ratio":0.977619,"contribution":34.22},{"key":"moisture","label":"Rutubet","unit":"%","value":6.17,"op":"max","limit":5,"weight":15,"ratio":0.810373,"contribution":12.16},{"key":"dust","label":"Toz","unit":"%","value":13.28,"op":"max","limit":3,"weight":15,"ratio":0.225904,"contribution":3.39}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":10,"date":"2025-03-01","year":2025,"sourceYear":2025,"commodity":"Ham Ayçiçek Yağı","vessel":"LADİON (WİMBA)","firm":"LADİON","country":"Rusya","tonnage":1500,"appearance":"","metrics":{"ffa":0.66,"moisture":0.2,"sediment":0.8,"wax":2637,"phosphorus":189.07,"benzo":1.5},"emtiaScore":75,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.66,"op":"max","limit":1.5,"weight":60,"ratio":1,"contribution":60},{"key":"sediment","label":"Tortu","unit":"%","value":0.8,"op":"max","limit":0.3,"weight":40,"ratio":0.375,"contribution":15}],"scoreModel":"Rafinasyon yükü modeli · FFA/Tortu"},{"id":11,"date":"2025-03-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Cousins","firm":"Adm Razgrad","country":"Bulgaristan","tonnage":1030,"appearance":"BEYAZ","metrics":{"ffa":1.78,"oil":43.57,"moisture":4.58,"impurity":0.16,"protein":12.58,"dust":6.34,"hectoliter":41.59,"core":91.17,"bran":2.34,"starch":14},"emtiaScore":92.1,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.78,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43.57,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.58,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":6.34,"op":"max","limit":3,"weight":15,"ratio":0.473186,"contribution":7.1}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":12,"date":"2025-03-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Emine Anne","firm":"Rogluten+ Interstrach","country":"Ukrayna Romanya","tonnage":1061,"appearance":"SARI","metrics":{"ffa":3.15,"oil":40.65,"moisture":6.81,"impurity":0.12,"protein":10.89,"dust":12.44,"hectoliter":50.71,"core":87.03,"bran":0.41,"starch":null},"emtiaScore":70.73,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":3.15,"op":"max","limit":2,"weight":35,"ratio":0.634921,"contribution":22.22},{"key":"oil","label":"Yağ","unit":"%","value":40.65,"op":"min","limit":42,"weight":35,"ratio":0.967857,"contribution":33.88},{"key":"moisture","label":"Rutubet","unit":"%","value":6.81,"op":"max","limit":5,"weight":15,"ratio":0.734214,"contribution":11.01},{"key":"dust","label":"Toz","unit":"%","value":12.44,"op":"max","limit":3,"weight":15,"ratio":0.241158,"contribution":3.62}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":13,"date":"2025-03-01","year":2025,"sourceYear":2025,"commodity":"Soya Tohumu","vessel":"MV Golden Bay","firm":"Prime Agricultrure","country":"Ukrayna","tonnage":9488.25,"appearance":"","metrics":{"ffa":0.78,"oil":21.7,"moisture":9.7,"impurity":0.2,"protein":34.25},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.78,"op":"max","limit":1.5,"weight":30,"ratio":1,"contribution":30},{"key":"oil","label":"Yağ","unit":"%","value":21.7,"op":"min","limit":18,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":9.7,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":34.25,"op":"min","limit":33,"weight":20,"ratio":1,"contribution":20},{"key":"impurity","label":"Empürite","unit":"%","value":0.2,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":14,"date":"2025-03-01","year":2025,"sourceYear":2025,"commodity":"Soya Tohumu","vessel":"MV Brave Knight","firm":"Abbey Global","country":"Ukrayna","tonnage":5005,"appearance":"","metrics":{"ffa":0.85,"oil":20.26,"moisture":10.4,"impurity":0.31,"protein":34.69},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.85,"op":"max","limit":1.5,"weight":30,"ratio":1,"contribution":30},{"key":"oil","label":"Yağ","unit":"%","value":20.26,"op":"min","limit":18,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":10.4,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":34.69,"op":"min","limit":33,"weight":20,"ratio":1,"contribution":20},{"key":"impurity","label":"Empürite","unit":"%","value":0.31,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":15,"date":"2025-04-01","year":2025,"sourceYear":2025,"commodity":"Ham Ayçiçek Yağı","vessel":"MID VOLGA 3","firm":"Aston","country":"Rusya","tonnage":5697,"appearance":"","metrics":{"ffa":0.86,"moisture":0.27,"sediment":1.69,"wax":2750,"phosphorus":318.14,"benzo":"TED"},"emtiaScore":67.1,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.86,"op":"max","limit":1.5,"weight":60,"ratio":1,"contribution":60},{"key":"sediment","label":"Tortu","unit":"%","value":1.69,"op":"max","limit":0.3,"weight":40,"ratio":0.177515,"contribution":7.1}],"scoreModel":"Rafinasyon yükü modeli · FFA/Tortu"},{"id":16,"date":"2025-04-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV İnandı","firm":"Rogluten+ Interstrach","country":"Ukrayna Romanya","tonnage":2219,"appearance":"SARI","metrics":{"ffa":2.62,"oil":36.64,"moisture":7.26,"impurity":0.25,"protein":13.09,"dust":10.13,"hectoliter":51.48,"core":88.48,"bran":1.14,"starch":null},"emtiaScore":72.02,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.62,"op":"max","limit":2,"weight":35,"ratio":0.763359,"contribution":26.72},{"key":"oil","label":"Yağ","unit":"%","value":36.64,"op":"min","limit":42,"weight":35,"ratio":0.872381,"contribution":30.53},{"key":"moisture","label":"Rutubet","unit":"%","value":7.26,"op":"max","limit":5,"weight":15,"ratio":0.688705,"contribution":10.33},{"key":"dust","label":"Toz","unit":"%","value":10.13,"op":"max","limit":3,"weight":15,"ratio":0.29615,"contribution":4.44}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":17,"date":"2025-04-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Burcum I","firm":"Adm Razgrad","country":"Bulgaristan","tonnage":2235,"appearance":"SARI","metrics":{"ffa":1.72,"oil":42.79,"moisture":5.1,"impurity":0.4,"protein":12.61,"dust":6.97,"hectoliter":41.96,"core":88.38,"bran":4.25,"starch":null},"emtiaScore":91.17,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.72,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":42.79,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":5.1,"op":"max","limit":5,"weight":15,"ratio":0.980392,"contribution":14.71},{"key":"dust","label":"Toz","unit":"%","value":6.97,"op":"max","limit":3,"weight":15,"ratio":0.430416,"contribution":6.46}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":18,"date":"2025-04-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Omskiy 137","firm":"Blue Danube","country":"Rusya","tonnage":2241,"appearance":"SARI","metrics":{"ffa":1.8,"oil":45.44,"moisture":4.15,"impurity":0.32,"protein":13.7,"dust":5.51,"hectoliter":50.22,"core":92.41,"bran":1.76,"starch":null},"emtiaScore":93.17,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.8,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":45.44,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.15,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":5.51,"op":"max","limit":3,"weight":15,"ratio":0.544465,"contribution":8.17}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":19,"date":"2025-04-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Mv Donstar 6","firm":"Cosecha","country":"Rusya","tonnage":1213,"appearance":"SARI","metrics":{"ffa":1.53,"oil":47.53,"moisture":3.93,"impurity":0.3,"protein":12.9,"dust":15.02,"hectoliter":54,"core":87.63,"bran":0.91,"starch":null},"emtiaScore":88,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.53,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":47.53,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":3.93,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":15.02,"op":"max","limit":3,"weight":15,"ratio":0.199734,"contribution":3}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":20,"date":"2025-04-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Somovsky 3054","firm":"Blue Danube","country":"Rusya","tonnage":2376,"appearance":"SARI","metrics":{"ffa":1.55,"oil":45.51,"moisture":4.26,"impurity":0.6,"protein":12.45,"dust":8.69,"hectoliter":49.31,"core":88.65,"bran":2.06,"starch":null},"emtiaScore":90.18,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.55,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":45.51,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.26,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":8.69,"op":"max","limit":3,"weight":15,"ratio":0.345224,"contribution":5.18}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":21,"date":"2025-04-01","year":2025,"sourceYear":2025,"commodity":"Soya Tohumu","vessel":"MV Geneve","firm":"ADM","country":"Brezilya","tonnage":9000,"appearance":"","metrics":{"ffa":0.95,"oil":22.37,"moisture":12.07,"impurity":0.58,"protein":33.38},"emtiaScore":99.23,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.95,"op":"max","limit":1.5,"weight":30,"ratio":1,"contribution":30},{"key":"oil","label":"Yağ","unit":"%","value":22.37,"op":"min","limit":18.5,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":12.07,"op":"max","limit":12,"weight":20,"ratio":0.9942,"contribution":19.88},{"key":"protein","label":"Protein","unit":"%","value":33.38,"op":"min","limit":34.5,"weight":20,"ratio":0.967536,"contribution":19.35},{"key":"impurity","label":"Empürite","unit":"%","value":0.58,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":22,"date":"2025-04-01","year":2025,"sourceYear":2025,"commodity":"Soya Tohumu","vessel":"MV Karanfil","firm":"`Zaria Ltd . Şti.","country":"Ukrayna","tonnage":10000,"appearance":"","metrics":{"ffa":0.65,"oil":20.79,"moisture":9.16,"impurity":3.64,"protein":34.49},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.65,"op":"max","limit":1.5,"weight":30,"ratio":1,"contribution":30},{"key":"oil","label":"Yağ","unit":"%","value":20.79,"op":"min","limit":18,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":9.16,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":34.49,"op":"min","limit":33,"weight":20,"ratio":1,"contribution":20},{"key":"impurity","label":"Empürite","unit":"%","value":3.64,"op":"max","limit":2,"weight":0,"ratio":0.549451,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":23,"date":"2025-05-01","year":2025,"sourceYear":2025,"commodity":"Ham Ayçiçek Yağı","vessel":"Mt Musa DzHalil","firm":"Chernozemye","country":"Rusya","tonnage":6000,"appearance":"","metrics":{"ffa":0.89,"moisture":0.16,"sediment":1.88,"wax":2040,"phosphorus":316.78,"benzo":"TED"},"emtiaScore":66.38,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.89,"op":"max","limit":1.5,"weight":60,"ratio":1,"contribution":60},{"key":"sediment","label":"Tortu","unit":"%","value":1.88,"op":"max","limit":0.3,"weight":40,"ratio":0.159574,"contribution":6.38}],"scoreModel":"Rafinasyon yükü modeli · FFA/Tortu"},{"id":24,"date":"2025-05-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Dilek","firm":"Adm Razgrad","country":"Bulgaristan","tonnage":2196,"appearance":"BEYAZ","metrics":{"ffa":1.73,"oil":41.1,"moisture":4.71,"impurity":0.71,"protein":12.7,"dust":5.7,"hectoliter":35.51,"core":87.42,"bran":6.12,"starch":14.8},"emtiaScore":92.14,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.73,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":41.1,"op":"min","limit":42,"weight":35,"ratio":0.978571,"contribution":34.25},{"key":"moisture","label":"Rutubet","unit":"%","value":4.71,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":5.7,"op":"max","limit":3,"weight":15,"ratio":0.526316,"contribution":7.89}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":25,"date":"2025-05-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Chelsea 5","firm":"Blue Danube","country":"Rusya","tonnage":5010,"appearance":"SARI","metrics":{"ffa":1.49,"oil":43.625,"moisture":3.92,"impurity":0.23,"protein":12.66,"dust":9.04,"hectoliter":52.58,"core":91.8,"bran":1.19,"starch":null},"emtiaScore":89.98,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.49,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43.625,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":3.92,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":9.04,"op":"max","limit":3,"weight":15,"ratio":0.331858,"contribution":4.98}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":26,"date":"2025-05-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Cosecha","firm":"Cosecha","country":"Azerbaycan","tonnage":66,"appearance":"SARI","metrics":{"ffa":1.89,"oil":44.48,"moisture":5.36,"impurity":0.35,"protein":13.89,"dust":2,"hectoliter":46.93,"core":92.99,"bran":4.66,"starch":null},"emtiaScore":98.99,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.89,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.48,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":5.36,"op":"max","limit":5,"weight":15,"ratio":0.932836,"contribution":13.99},{"key":"dust","label":"Toz","unit":"%","value":2,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":27,"date":"2025-05-01","year":2025,"sourceYear":2025,"commodity":"Soya Tohumu","vessel":"MV CL HUAI HUA","firm":"Inter Grain SA","country":"Brezilya","tonnage":15100,"appearance":"","metrics":{"ffa":2.36,"oil":22.05,"moisture":12.03,"impurity":0.56,"protein":34.55},"emtiaScore":89.02,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.36,"op":"max","limit":1.5,"weight":30,"ratio":0.635593,"contribution":19.07},{"key":"oil","label":"Yağ","unit":"%","value":22.05,"op":"min","limit":18.5,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":12.03,"op":"max","limit":12,"weight":20,"ratio":0.997506,"contribution":19.95},{"key":"protein","label":"Protein","unit":"%","value":34.55,"op":"min","limit":34.5,"weight":20,"ratio":1,"contribution":20},{"key":"impurity","label":"Empürite","unit":"%","value":0.56,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":28,"date":"2025-06-01","year":2025,"sourceYear":2025,"commodity":"Ham Ayçiçek Yağı","vessel":"Mt Stellar","firm":"Agriprime Global","country":"Ukrayna","tonnage":4700,"appearance":"","metrics":{"ffa":0.8,"moisture":0.17,"sediment":0.86,"wax":1185,"phosphorus":125.08,"benzo":2.03},"emtiaScore":73.95,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.8,"op":"max","limit":1.5,"weight":60,"ratio":1,"contribution":60},{"key":"sediment","label":"Tortu","unit":"%","value":0.86,"op":"max","limit":0.3,"weight":40,"ratio":0.348837,"contribution":13.95}],"scoreModel":"Rafinasyon yükü modeli · FFA/Tortu"},{"id":29,"date":"2025-06-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV FORTUNA","firm":"LLC GRAIN TRADE","country":"Rusya","tonnage":599.43,"appearance":"SARI","metrics":{"ffa":1.63,"oil":46.46,"moisture":4.32,"impurity":0.3,"protein":11.78,"dust":8.6,"hectoliter":47.75,"core":90.3,"bran":0.8,"starch":null},"emtiaScore":90.23,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.63,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":46.46,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.32,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":8.6,"op":"max","limit":3,"weight":15,"ratio":0.348837,"contribution":5.23}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":30,"date":"2025-06-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"COSECHA","firm":"COSECHA","country":"Özbekistan","tonnage":80,"appearance":"SARI","metrics":{"ffa":1.8,"oil":47.61,"moisture":3.43,"impurity":0.4,"protein":11.57,"dust":2.01,"hectoliter":50.66,"core":96.19,"bran":1.4,"starch":null},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.8,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":47.61,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":3.43,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":2.01,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":31,"date":"2025-06-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Ommax","firm":"Blue Danube","country":"Rusya","tonnage":3183,"appearance":"SARI","metrics":{"ffa":1.44,"oil":45.36,"moisture":4.06,"impurity":0.48,"protein":12.17,"dust":8.64,"hectoliter":51.1,"core":89.19,"bran":1.69,"starch":null},"emtiaScore":90.21,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.44,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":45.36,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.06,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":8.64,"op":"max","limit":3,"weight":15,"ratio":0.347222,"contribution":5.21}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":32,"date":"2025-06-01","year":2025,"sourceYear":2025,"commodity":"Soya Tohumu","vessel":"GLYFADA","firm":"ADM","country":"Brezilya","tonnage":11000,"appearance":"","metrics":{"ffa":2.1,"oil":22.4,"moisture":11.5,"impurity":0.3,"protein":34.56},"emtiaScore":91.43,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.1,"op":"max","limit":1.5,"weight":30,"ratio":0.714286,"contribution":21.43},{"key":"oil","label":"Yağ","unit":"%","value":22.4,"op":"min","limit":18.5,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":11.5,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":34.56,"op":"min","limit":34.5,"weight":20,"ratio":1,"contribution":20},{"key":"impurity","label":"Empürite","unit":"%","value":0.3,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":33,"date":"2025-07-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV HayaQueen","firm":"ADM","country":"Bulgaristan","tonnage":5498,"appearance":"BEYAZ","metrics":{"ffa":1.42,"oil":43.29,"moisture":4.69,"impurity":0.44,"protein":13.29,"dust":8.09,"hectoliter":38.1,"core":88.07,"bran":3.4,"starch":13.8},"emtiaScore":90.56,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.42,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43.29,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.69,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":8.09,"op":"max","limit":3,"weight":15,"ratio":0.370828,"contribution":5.56}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":34,"date":"2025-07-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Chelsea 6","firm":"Blue Danube","country":"Rusya","tonnage":4880,"appearance":"SARI","metrics":{"ffa":1.8,"oil":44.4,"moisture":4.16,"impurity":0.42,"protein":12.54,"dust":7.17,"hectoliter":51.97,"core":90.59,"bran":1.83,"starch":null},"emtiaScore":91.28,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.8,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.4,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.16,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":7.17,"op":"max","limit":3,"weight":15,"ratio":0.41841,"contribution":6.28}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":35,"date":"2025-07-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Cosecha","firm":"Cosecha","country":"Özbekistan","tonnage":100,"appearance":"SARI","metrics":{"ffa":1.84,"oil":49.27,"moisture":3.56,"impurity":0.41,"protein":10.75,"dust":1.1,"hectoliter":50.42,"core":97.49,"bran":1,"starch":null},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.84,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":49.27,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":3.56,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":1.1,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":36,"date":"2025-07-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Cosecha","firm":"Cosecha","country":"Kazakistan","tonnage":43.96,"appearance":"SARI","metrics":{"ffa":1.8,"oil":43.81,"moisture":3.07,"impurity":0.12,"protein":11.32,"dust":2.27,"hectoliter":48.88,"core":92.96,"bran":4.65,"starch":null},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.8,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43.81,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":3.07,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":2.27,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":37,"date":"2025-08-01","year":2025,"sourceYear":2025,"commodity":"Ham Ayçiçek Yağı","vessel":"MT MARIYA","firm":"Mez Yug. Russi","country":"Rusya","tonnage":3015,"appearance":"","metrics":{"ffa":0.95,"moisture":0.29,"sediment":0.63,"wax":777,"phosphorus":130.01,"benzo":"TED"},"emtiaScore":79.05,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.95,"op":"max","limit":1.5,"weight":60,"ratio":1,"contribution":60},{"key":"sediment","label":"Tortu","unit":"%","value":0.63,"op":"max","limit":0.3,"weight":40,"ratio":0.47619,"contribution":19.05}],"scoreModel":"Rafinasyon yükü modeli · FFA/Tortu"},{"id":38,"date":"2025-08-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Chelsea 6 (2. Seferi)","firm":"Blue Danube","country":"Rusya","tonnage":4876,"appearance":"SARI","metrics":{"ffa":1.6,"oil":43,"moisture":4.2,"impurity":0.44,"protein":12.58,"dust":6.33,"hectoliter":47.4,"core":90.27,"bran":2.96,"starch":null},"emtiaScore":92.11,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.6,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.2,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":6.33,"op":"max","limit":3,"weight":15,"ratio":0.473934,"contribution":7.11}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":39,"date":"2025-08-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Kemal Kuru","firm":"Adm Razgrad","country":"Bulgaristan / Sırp / Ukrayna","tonnage":2043,"appearance":"BEYAZ","metrics":{"ffa":1.7,"oil":41.54,"moisture":4.61,"impurity":0.62,"protein":13.2,"dust":2.91,"hectoliter":34.2,"core":85.62,"bran":10.85,"starch":15.1},"emtiaScore":99.62,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.7,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":41.54,"op":"min","limit":42,"weight":35,"ratio":0.989048,"contribution":34.62},{"key":"moisture","label":"Rutubet","unit":"%","value":4.61,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":2.91,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":40,"date":"2025-08-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV HAJE HASEN","firm":"Rogluten+ Interstrach","country":"Ukrayna Romanya","tonnage":4798,"appearance":"BEYAZ","metrics":{"ffa":2.95,"oil":41.86,"moisture":6.2,"impurity":0.44,"protein":11.35,"dust":9.15,"hectoliter":51.25,"core":89.27,"bran":1.14,"starch":19.5},"emtiaScore":75.63,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.95,"op":"max","limit":2,"weight":35,"ratio":0.677966,"contribution":23.73},{"key":"oil","label":"Yağ","unit":"%","value":41.86,"op":"min","limit":42,"weight":35,"ratio":0.996667,"contribution":34.88},{"key":"moisture","label":"Rutubet","unit":"%","value":6.2,"op":"max","limit":5,"weight":15,"ratio":0.806452,"contribution":12.1},{"key":"dust","label":"Toz","unit":"%","value":9.15,"op":"max","limit":3,"weight":15,"ratio":0.327869,"contribution":4.92}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":41,"date":"2025-08-01","year":2025,"sourceYear":2025,"commodity":"Soya Tohumu","vessel":"Kubroslı-Y","firm":"Arista trading Ag","country":"Ukrayna","tonnage":10387,"appearance":"","metrics":{"ffa":0.53,"oil":21.02,"moisture":10.1,"impurity":1.23,"protein":34.72},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.53,"op":"max","limit":1.5,"weight":30,"ratio":1,"contribution":30},{"key":"oil","label":"Yağ","unit":"%","value":21.02,"op":"min","limit":18,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":10.1,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":34.72,"op":"min","limit":33,"weight":20,"ratio":1,"contribution":20},{"key":"impurity","label":"Empürite","unit":"%","value":1.23,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":42,"date":"2025-09-01","year":2025,"sourceYear":2025,"commodity":"Ayçiçek Tohumu","vessel":"MV Mehmet Ağa","firm":"Carco group agritrade","country":"Romanya","tonnage":3500,"appearance":"","metrics":{"ffa":0.95,"oil":43.59,"moisture":6.4,"impurity":5.05,"protein":16.36},"emtiaScore":96.88,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.95,"op":"max","limit":1.5,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43.59,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":6.4,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":5.05,"op":"max","limit":4,"weight":15,"ratio":0.792079,"contribution":11.88}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":43,"date":"2025-09-01","year":2025,"sourceYear":2025,"commodity":"Ayçiçek Tohumu","vessel":"MV Sea Elephant","firm":"Carco group agritrade","country":"Romanya","tonnage":5455,"appearance":"","metrics":{"ffa":0.87,"oil":44.13,"moisture":6.33,"impurity":6.01,"protein":16.46},"emtiaScore":94.98,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.87,"op":"max","limit":1.5,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.13,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":6.33,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":6.01,"op":"max","limit":4,"weight":15,"ratio":0.665557,"contribution":9.98}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":44,"date":"2025-09-01","year":2025,"sourceYear":2025,"commodity":"Ham Ayçiçek Yağı","vessel":"MT TIMWIN","firm":"Mez Yug. Russi","country":"Rusya","tonnage":2718,"appearance":"","metrics":{"ffa":0.81,"moisture":0.21,"sediment":0.6,"wax":1024,"phosphorus":76.39,"benzo":0.58},"emtiaScore":80,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.81,"op":"max","limit":1.5,"weight":60,"ratio":1,"contribution":60},{"key":"sediment","label":"Tortu","unit":"%","value":0.6,"op":"max","limit":0.3,"weight":40,"ratio":0.5,"contribution":20}],"scoreModel":"Rafinasyon yükü modeli · FFA/Tortu"},{"id":45,"date":"2025-09-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Jarkent","firm":"Jarkent","country":"Kazakistan","tonnage":87.92,"appearance":"Sarı","metrics":{"ffa":1.44,"oil":44.99,"moisture":4.27,"impurity":0.26,"protein":10.69,"dust":0.84,"hectoliter":46.8,"core":93.51,"bran":5.39,"starch":null},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.44,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.99,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.27,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":0.84,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":46,"date":"2025-09-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV ANNA 2005","firm":"Adm Razgrad","country":"Bulgaristan / Sırp / Ukrayna","tonnage":2702,"appearance":"Beyaz","metrics":{"ffa":1.63,"oil":41.71,"moisture":4.88,"impurity":0.21,"protein":12.65,"dust":6,"hectoliter":35.2,"core":89.34,"bran":4.45,"starch":null},"emtiaScore":92.26,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.63,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":41.71,"op":"min","limit":42,"weight":35,"ratio":0.993095,"contribution":34.76},{"key":"moisture","label":"Rutubet","unit":"%","value":4.88,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":6,"op":"max","limit":3,"weight":15,"ratio":0.5,"contribution":7.5}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":47,"date":"2025-10-01","year":2025,"sourceYear":2025,"commodity":"Ayçiçek Tohumu","vessel":"MV AMBER SPRİT","firm":"Vimeksim","country":"Sırbistan","tonnage":2959,"appearance":"","metrics":{"ffa":1.01,"oil":44.06,"moisture":8,"impurity":4.36,"protein":14.91},"emtiaScore":98.76,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.01,"op":"max","limit":1.5,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.06,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":8,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":4.36,"op":"max","limit":4,"weight":15,"ratio":0.917431,"contribution":13.76}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":48,"date":"2025-10-01","year":2025,"sourceYear":2025,"commodity":"Ayçiçek Tohumu","vessel":"MV PLUTO","firm":"Singapore JY","country":"Romanya","tonnage":16333,"appearance":"","metrics":{"ffa":0.65,"oil":44.69,"moisture":6.95,"impurity":4.64,"protein":16.12},"emtiaScore":97.93,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.65,"op":"max","limit":1.5,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.69,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":6.95,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":4.64,"op":"max","limit":4,"weight":15,"ratio":0.862069,"contribution":12.93}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":49,"date":"2025-10-01","year":2025,"sourceYear":2025,"commodity":"Ham Ayçiçek Yağı","vessel":"MT ATRIA","firm":"Green supliers(EFKO)","country":"Rusya","tonnage":2778,"appearance":"","metrics":{"ffa":0.57,"moisture":0.21,"sediment":1.34,"wax":1100,"phosphorus":215.86,"benzo":"TED"},"emtiaScore":68.96,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.57,"op":"max","limit":1.5,"weight":60,"ratio":1,"contribution":60},{"key":"sediment","label":"Tortu","unit":"%","value":1.34,"op":"max","limit":0.3,"weight":40,"ratio":0.223881,"contribution":8.96}],"scoreModel":"Rafinasyon yükü modeli · FFA/Tortu"},{"id":50,"date":"2025-10-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Cosecha","firm":"Cosecha","country":"Özbekistan","tonnage":120,"appearance":"SARI","metrics":{"ffa":2.76,"oil":47.12,"moisture":3.71,"impurity":0.52,"protein":11.21,"dust":0.34,"hectoliter":48.2,"core":96.74,"bran":2.4,"starch":null},"emtiaScore":90.36,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.76,"op":"max","limit":2,"weight":35,"ratio":0.724638,"contribution":25.36},{"key":"oil","label":"Yağ","unit":"%","value":47.12,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":3.71,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":0.34,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":51,"date":"2025-10-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Safina","firm":"Cosecha","country":"Rusya","tonnage":2031,"appearance":"SARI","metrics":{"ffa":2.5,"oil":46.02,"moisture":4.22,"impurity":0.65,"protein":12.96,"dust":8.67,"hectoliter":49.2,"core":88.92,"bran":1.76,"starch":null},"emtiaScore":83.19,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.5,"op":"max","limit":2,"weight":35,"ratio":0.8,"contribution":28},{"key":"oil","label":"Yağ","unit":"%","value":46.02,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.22,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":8.67,"op":"max","limit":3,"weight":15,"ratio":0.346021,"contribution":5.19}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":52,"date":"2025-10-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Ella","firm":"Blue Danube","country":"Rusya","tonnage":5998,"appearance":"Sarı","metrics":{"ffa":1.95,"oil":43.83,"moisture":4.1,"impurity":0.16,"protein":13.11,"dust":7.51,"hectoliter":49.74,"core":90.97,"bran":1.36,"starch":null},"emtiaScore":90.99,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.95,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43.83,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.1,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":7.51,"op":"max","limit":3,"weight":15,"ratio":0.399467,"contribution":5.99}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":53,"date":"2025-10-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV Clever","firm":"Adm Razgrad","country":"Bulgaristan","tonnage":2709,"appearance":"BEYAZ","metrics":{"ffa":1.86,"oil":39.58,"moisture":4.57,"impurity":0.3,"protein":13.5,"dust":5.4,"hectoliter":37.5,"core":87.75,"bran":6.55,"starch":null},"emtiaScore":91.31,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.86,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":39.58,"op":"min","limit":42,"weight":35,"ratio":0.942381,"contribution":32.98},{"key":"moisture","label":"Rutubet","unit":"%","value":4.57,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":5.4,"op":"max","limit":3,"weight":15,"ratio":0.555556,"contribution":8.33}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":54,"date":"2025-10-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Asia Agro","firm":"Asia Agro","country":"Kazakistan","tonnage":310,"appearance":"Sarı","metrics":{"ffa":2.58,"oil":52.77,"moisture":3.37,"impurity":0.18,"protein":12.02,"dust":3.74,"hectoliter":51.08,"core":94.42,"bran":1.67,"starch":null},"emtiaScore":89.16,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.58,"op":"max","limit":2,"weight":35,"ratio":0.775194,"contribution":27.13},{"key":"oil","label":"Yağ","unit":"%","value":52.77,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":3.37,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":3.74,"op":"max","limit":3,"weight":15,"ratio":0.802139,"contribution":12.03}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":55,"date":"2025-11-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV DANO","firm":"Heinz+ Interstarch","country":"Avusturya, Macaristan, Ukrayna","tonnage":4016,"appearance":"SARI","metrics":{"ffa":4.42,"oil":39.02,"moisture":7.03,"impurity":0.12,"protein":12.6,"dust":11.32,"hectoliter":50.3,"core":87.16,"bran":1.4,"starch":null},"emtiaScore":63.01,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":4.42,"op":"max","limit":2,"weight":35,"ratio":0.452489,"contribution":15.84},{"key":"oil","label":"Yağ","unit":"%","value":39.02,"op":"min","limit":42,"weight":35,"ratio":0.929048,"contribution":32.52},{"key":"moisture","label":"Rutubet","unit":"%","value":7.03,"op":"max","limit":5,"weight":15,"ratio":0.711238,"contribution":10.67},{"key":"dust","label":"Toz","unit":"%","value":11.32,"op":"max","limit":3,"weight":15,"ratio":0.265018,"contribution":3.98}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":56,"date":"2025-12-01","year":2025,"sourceYear":2025,"commodity":"Ayçiçek Tohumu","vessel":"MV ICDAS","firm":"Cofco İnternational","country":"Romanya","tonnage":9819,"appearance":"","metrics":{"ffa":0.94,"oil":44.9,"moisture":7.4,"impurity":4.1,"protein":16.2},"emtiaScore":99.63,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.94,"op":"max","limit":1.5,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.9,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":7.4,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":4.1,"op":"max","limit":4,"weight":15,"ratio":0.97561,"contribution":14.63}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":57,"date":"2025-12-01","year":2025,"sourceYear":2025,"commodity":"Ayçiçek Tohumu","vessel":"MV UZAY","firm":"HİTİT AG","country":"Romanya","tonnage":4509,"appearance":"","metrics":{"ffa":0.82,"oil":44,"moisture":6.7,"impurity":3.81,"protein":15.62},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.82,"op":"max","limit":1.5,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":6.7,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":3.81,"op":"max","limit":4,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":58,"date":"2025-12-01","year":2025,"sourceYear":2025,"commodity":"Ham Ayçiçek Yağı","vessel":"MT GOLDEN SAPLING","firm":"Bunge","country":"Rusya","tonnage":6026,"appearance":"","metrics":{"ffa":0.62,"moisture":0.19,"sediment":1.02,"wax":915,"phosphorus":80.63,"benzo":1.4},"emtiaScore":71.76,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.62,"op":"max","limit":1.5,"weight":60,"ratio":1,"contribution":60},{"key":"sediment","label":"Tortu","unit":"%","value":1.02,"op":"max","limit":0.3,"weight":40,"ratio":0.294118,"contribution":11.76}],"scoreModel":"Rafinasyon yükü modeli · FFA/Tortu"},{"id":59,"date":"2025-12-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"MV FERTİLE","firm":"ADM AZGARD","country":"Bulgaristan","tonnage":2352,"appearance":"","metrics":{"ffa":1.91,"oil":40.18,"moisture":4.96,"impurity":0.4,"protein":14.06,"dust":3.96,"hectoliter":39.2,"core":87.66,"bran":7.98,"starch":null},"emtiaScore":94.84,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.91,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":40.18,"op":"min","limit":42,"weight":35,"ratio":0.956667,"contribution":33.48},{"key":"moisture","label":"Rutubet","unit":"%","value":4.96,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":3.96,"op":"max","limit":3,"weight":15,"ratio":0.757576,"contribution":11.36}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":60,"date":"2025-12-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Asia Agro (2. Parti","firm":"Asia Agro","country":"Kazakistan","tonnage":310,"appearance":"Sarı","metrics":{"ffa":2.23,"oil":43.11,"moisture":4.26,"impurity":0.44,"protein":11.8,"dust":3.52,"hectoliter":46.48,"core":92.13,"bran":3.91,"starch":null},"emtiaScore":94.17,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.23,"op":"max","limit":2,"weight":35,"ratio":0.896861,"contribution":31.39},{"key":"oil","label":"Yağ","unit":"%","value":43.11,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.26,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":3.52,"op":"max","limit":3,"weight":15,"ratio":0.852273,"contribution":12.78}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":61,"date":"2025-12-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Mehmet Ağa","firm":"Sunar Agro Srl","country":"Romanya / Ukrayna Macaristan","tonnage":5318,"appearance":"Beyaz","metrics":{"ffa":6.35,"oil":37.83,"moisture":7.37,"impurity":0.41,"protein":12.42,"dust":11.56,"hectoliter":49,"core":86.66,"bran":1.38,"starch":null},"emtiaScore":56.61,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":6.35,"op":"max","limit":2,"weight":35,"ratio":0.314961,"contribution":11.02},{"key":"oil","label":"Yağ","unit":"%","value":37.83,"op":"min","limit":42,"weight":35,"ratio":0.900714,"contribution":31.52},{"key":"moisture","label":"Rutubet","unit":"%","value":7.37,"op":"max","limit":5,"weight":15,"ratio":0.678426,"contribution":10.18},{"key":"dust","label":"Toz","unit":"%","value":11.56,"op":"max","limit":3,"weight":15,"ratio":0.259516,"contribution":3.89}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":62,"date":"2025-12-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Cosecha","firm":"Cosecha","country":"Özbekistan","tonnage":140,"appearance":"Sarı","metrics":{"ffa":1.85,"oil":42.02,"moisture":5.24,"impurity":0.15,"protein":10.3,"dust":0.42,"hectoliter":49.11,"core":98.55,"bran":0.88,"starch":null},"emtiaScore":99.31,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.85,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":42.02,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":5.24,"op":"max","limit":5,"weight":15,"ratio":0.954198,"contribution":14.31},{"key":"dust","label":"Toz","unit":"%","value":0.42,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":63,"date":"2025-12-01","year":2025,"sourceYear":2025,"commodity":"Mısırözü","vessel":"Energy 2","firm":"Blue Danube","country":"Rusya","tonnage":5321,"appearance":"Sarı","metrics":{"ffa":1.85,"oil":43.14,"moisture":4.14,"impurity":0.44,"protein":13.8,"dust":7.42,"hectoliter":46.28,"core":89.58,"bran":2.57,"starch":null},"emtiaScore":91.06,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.85,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43.14,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.14,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":7.42,"op":"max","limit":3,"weight":15,"ratio":0.404313,"contribution":6.06}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":64,"date":"2025-12-01","year":2025,"sourceYear":2025,"commodity":"Soya Tohumu","vessel":"Hasan G","firm":"Graine House oü","country":"Ukrayna","tonnage":5596,"appearance":"","metrics":{"ffa":0.81,"oil":19.08,"moisture":13,"impurity":0.47,"protein":33.92},"emtiaScore":98.46,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.81,"op":"max","limit":1.5,"weight":30,"ratio":1,"contribution":30},{"key":"oil","label":"Yağ","unit":"%","value":19.08,"op":"min","limit":18,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":13,"op":"max","limit":12,"weight":20,"ratio":0.923077,"contribution":18.46},{"key":"protein","label":"Protein","unit":"%","value":33.92,"op":"min","limit":33,"weight":20,"ratio":1,"contribution":20},{"key":"impurity","label":"Empürite","unit":"%","value":0.47,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":65,"date":"2026-01-01","year":2026,"sourceYear":2026,"commodity":"Ayçiçek Tohumu","vessel":"MV Megasun","firm":"Orom Imexpo","country":"Moldova","tonnage":3851,"appearance":"","metrics":{"ffa":0.66,"oil":44.48,"moisture":6.1,"impurity":3.12,"protein":13.96},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.66,"op":"max","limit":1.5,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.48,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":6.1,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":3.12,"op":"max","limit":4,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":66,"date":"2026-01-01","year":2026,"sourceYear":2026,"commodity":"Ayçiçek Tohumu","vessel":"MV HAMBURG HS","firm":"Sunar Agro Srl","country":"Moldova / Romanya","tonnage":4208,"appearance":"","metrics":{"ffa":1.72,"oil":44.4,"moisture":8.2,"impurity":2.77,"protein":14.62},"emtiaScore":95.52,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.72,"op":"max","limit":1.5,"weight":35,"ratio":0.872093,"contribution":30.52},{"key":"oil","label":"Yağ","unit":"%","value":44.4,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":8.2,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":2.77,"op":"max","limit":4,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":67,"date":"2026-01-01","year":2026,"sourceYear":2026,"commodity":"Ham Ayçiçek Yağı","vessel":"MT Zheng HE 3","firm":"Green Suppliers","country":"Ukrayna","tonnage":6490,"appearance":"","metrics":{"ffa":0.66,"moisture":0.17,"sediment":1.34,"wax":1125,"phosphorus":237.81,"benzo":"TED"},"emtiaScore":68.96,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.66,"op":"max","limit":1.5,"weight":60,"ratio":1,"contribution":60},{"key":"sediment","label":"Tortu","unit":"%","value":1.34,"op":"max","limit":0.3,"weight":40,"ratio":0.223881,"contribution":8.96}],"scoreModel":"Rafinasyon yükü modeli · FFA/Tortu"},{"id":68,"date":"2026-01-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"Cosecha (Gökbora)","firm":"Cosecha","country":"Azerbaycan","tonnage":264,"appearance":"","metrics":{"ffa":1.98,"oil":42.75,"moisture":4.4,"impurity":0.33,"protein":13.43,"dust":1.25,"hectoliter":40.59,"core":90.8,"bran":7.62,"starch":null},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.98,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":42.75,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.4,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":1.25,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":69,"date":"2026-01-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"MV FENER","firm":"ADM","country":"Bulgaristan","tonnage":2538,"appearance":"","metrics":{"ffa":1.68,"oil":39.78,"moisture":5.1,"impurity":0.43,"protein":14.54,"dust":8.65,"hectoliter":38.3,"core":87.64999999999999,"bran":3.27,"starch":null},"emtiaScore":88.06,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.68,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":39.78,"op":"min","limit":42,"weight":35,"ratio":0.947143,"contribution":33.15},{"key":"moisture","label":"Rutubet","unit":"%","value":5.1,"op":"max","limit":5,"weight":15,"ratio":0.980392,"contribution":14.71},{"key":"dust","label":"Toz","unit":"%","value":8.65,"op":"max","limit":3,"weight":15,"ratio":0.346821,"contribution":5.2}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":70,"date":"2026-02-01","year":2026,"sourceYear":2026,"commodity":"Ayçiçek Tohumu","vessel":"MV AKDENİZ","firm":"Orom Imexpo","country":"Moldova","tonnage":3757,"appearance":"","metrics":{"ffa":0.74,"oil":44.1,"moisture":6.3,"impurity":3.75,"protein":15.5},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.74,"op":"max","limit":1.5,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.1,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":6.3,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":3.75,"op":"max","limit":4,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":71,"date":"2026-02-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"Asia Agro(Gökbora)","firm":"Asia Agro","country":"Kazakistan","tonnage":310,"appearance":"","metrics":{"ffa":1.43,"oil":43.65,"moisture":4.64,"impurity":0.24,"protein":12.41,"dust":1.62,"hectoliter":48.21,"core":94.8,"bran":3.34,"starch":null},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.43,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43.65,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.64,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":1.62,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":72,"date":"2026-02-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"BYB OTELLO","firm":"Adm rougluten","country":"Romanya","tonnage":3333.96,"appearance":"","metrics":{"ffa":2.74,"oil":34.66,"moisture":8.1,"impurity":0.41,"protein":13.18,"dust":12.23,"hectoliter":48.7,"core":86.16,"bran":1.2,"starch":null},"emtiaScore":67.37,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.74,"op":"max","limit":2,"weight":35,"ratio":0.729927,"contribution":25.55},{"key":"oil","label":"Yağ","unit":"%","value":34.66,"op":"min","limit":42,"weight":35,"ratio":0.825238,"contribution":28.88},{"key":"moisture","label":"Rutubet","unit":"%","value":8.1,"op":"max","limit":5,"weight":15,"ratio":0.617284,"contribution":9.26},{"key":"dust","label":"Toz","unit":"%","value":12.23,"op":"max","limit":3,"weight":15,"ratio":0.245298,"contribution":3.68}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":73,"date":"2026-02-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"OMSKY 117","firm":"Cosecha","country":"Rusya","tonnage":2218,"appearance":"","metrics":{"ffa":1.62,"oil":45.51,"moisture":4.32,"impurity":0.5,"protein":13.55,"dust":7.75,"hectoliter":48.79,"core":90.74,"bran":1.01,"starch":null},"emtiaScore":90.81,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.62,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":45.51,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.32,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":7.75,"op":"max","limit":3,"weight":15,"ratio":0.387097,"contribution":5.81}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":74,"date":"2026-03-01","year":2026,"sourceYear":2026,"commodity":"Ayçiçek Tohumu","vessel":"MV NANA MOON","firm":"Sunar Agro","country":"Moldova / Romanya","tonnage":4098,"appearance":"","metrics":{"ffa":2.38,"oil":44.34,"moisture":8.8,"impurity":3.28,"protein":17.56},"emtiaScore":87.06,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.38,"op":"max","limit":1.5,"weight":35,"ratio":0.630252,"contribution":22.06},{"key":"oil","label":"Yağ","unit":"%","value":44.34,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":8.8,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":3.28,"op":"max","limit":4,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":75,"date":"2026-03-01","year":2026,"sourceYear":2026,"commodity":"Ayçiçek Tohumu","vessel":"MV CHALSİ","firm":"Orom Imexpo","country":"Moldova","tonnage":4025,"appearance":"","metrics":{"ffa":0.68,"oil":44.5,"moisture":6.9,"impurity":2.3,"protein":15.34},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.68,"op":"max","limit":1.5,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.5,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":6.9,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":2.3,"op":"max","limit":4,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":76,"date":"2026-03-01","year":2026,"sourceYear":2026,"commodity":"Ayçiçek Tohumu","vessel":"MV ALIATTIN D","firm":"Cofco Bulgaria","country":"Bulgaristan","tonnage":4188,"appearance":"","metrics":{"ffa":0.64,"oil":43.76,"moisture":4.7,"impurity":2.8,"protein":17.71},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.64,"op":"max","limit":1.5,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":43.76,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.7,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":2.8,"op":"max","limit":4,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":77,"date":"2026-03-01","year":2026,"sourceYear":2026,"commodity":"Ayçiçek Tohumu","vessel":"İMİSİK","firm":"İMİSİK","country":"Kazakistan","tonnage":1444,"appearance":"","metrics":{"ffa":0.54,"oil":47.1,"moisture":6.4,"impurity":1.14,"protein":13.2},"emtiaScore":100,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.54,"op":"max","limit":1.5,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":47.1,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":6.4,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":1.14,"op":"max","limit":4,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":78,"date":"2026-03-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"MV Aslıhan Gemisi","firm":"ADM/Razgard","country":"Bulgaristan","tonnage":2174,"appearance":"","metrics":{"ffa":1.64,"oil":42.88,"moisture":5.03,"impurity":0.35,"protein":15.36,"dust":8.16,"hectoliter":43.44,"core":89.85,"bran":1.64,"starch":null},"emtiaScore":90.42,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.64,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":42.88,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":5.03,"op":"max","limit":5,"weight":15,"ratio":0.994036,"contribution":14.91},{"key":"dust","label":"Toz","unit":"%","value":8.16,"op":"max","limit":3,"weight":15,"ratio":0.367647,"contribution":5.51}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":79,"date":"2026-03-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"Mv Nana Moon","firm":"Sunar Agro SRL","country":"Romanya","tonnage":2952.14,"appearance":"","metrics":{"ffa":7.73,"oil":33.49,"moisture":7.55,"impurity":1.24,"protein":11.21,"dust":16,"hectoliter":50.95,"core":81.28,"bran":1.48,"starch":null},"emtiaScore":49.71,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":7.73,"op":"max","limit":2,"weight":35,"ratio":0.258732,"contribution":9.06},{"key":"oil","label":"Yağ","unit":"%","value":33.49,"op":"min","limit":42,"weight":35,"ratio":0.797381,"contribution":27.91},{"key":"moisture","label":"Rutubet","unit":"%","value":7.55,"op":"max","limit":5,"weight":15,"ratio":0.662252,"contribution":9.93},{"key":"dust","label":"Toz","unit":"%","value":16,"op":"max","limit":3,"weight":15,"ratio":0.1875,"contribution":2.81}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":80,"date":"2026-03-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"Neva Leader3","firm":"Blue Danube","country":"Rusya","tonnage":5310,"appearance":"","metrics":{"ffa":1.54,"oil":44.88,"moisture":4.39,"impurity":0.41,"protein":13.58,"dust":4.8,"hectoliter":50.47,"core":92.76,"bran":1.83,"starch":null},"emtiaScore":94.38,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.54,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":44.88,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.39,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":4.8,"op":"max","limit":3,"weight":15,"ratio":0.625,"contribution":9.38}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":81,"date":"2026-03-01","year":2026,"sourceYear":2026,"commodity":"Soya Tohumu","vessel":"MV CATİVERA","firm":"","country":"Ukrayna","tonnage":6494,"appearance":"","metrics":{"ffa":0.6,"oil":19.76,"moisture":11.18,"impurity":0.46,"protein":32.55},"emtiaScore":99.73,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.6,"op":"max","limit":1.5,"weight":30,"ratio":1,"contribution":30},{"key":"oil","label":"Yağ","unit":"%","value":19.76,"op":"min","limit":18,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":11.18,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":32.55,"op":"min","limit":33,"weight":20,"ratio":0.986364,"contribution":19.73},{"key":"impurity","label":"Empürite","unit":"%","value":0.46,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":82,"date":"2026-03-01","year":2026,"sourceYear":2026,"commodity":"Soya Tohumu","vessel":"MV BARROW","firm":"","country":"Brezilya","tonnage":5400,"appearance":"","metrics":{"ffa":1.06,"oil":22.76,"moisture":11.8,"impurity":0.13,"protein":33.32},"emtiaScore":99.32,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.06,"op":"max","limit":1.5,"weight":30,"ratio":1,"contribution":30},{"key":"oil","label":"Yağ","unit":"%","value":22.76,"op":"min","limit":18.5,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":11.8,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":33.32,"op":"min","limit":34.5,"weight":20,"ratio":0.965797,"contribution":19.32},{"key":"impurity","label":"Empürite","unit":"%","value":0.13,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":83,"date":"2026-04-01","year":2026,"sourceYear":2026,"commodity":"Ham Ayçiçek Yağı","vessel":"MT CUMBRİAN","firm":"Green Suppliers","country":"Rusya","tonnage":5999,"appearance":"","metrics":{"ffa":0.76,"moisture":0.18,"sediment":1.91,"wax":1350,"phosphorus":316.54,"benzo":"TED"},"emtiaScore":66.28,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.76,"op":"max","limit":1.5,"weight":60,"ratio":1,"contribution":60},{"key":"sediment","label":"Tortu","unit":"%","value":1.91,"op":"max","limit":0.3,"weight":40,"ratio":0.157068,"contribution":6.28}],"scoreModel":"Rafinasyon yükü modeli · FFA/Tortu"},{"id":84,"date":"2026-04-01","year":2026,"sourceYear":2026,"commodity":"Ham Ayçiçek Yağı","vessel":"MC OCEAN AGLAIA","firm":"Green Suppliers/EFCO","country":"Rusya","tonnage":1847,"appearance":"","metrics":{"ffa":0.78,"moisture":0.15,"sediment":1.38,"wax":1055,"phosphorus":217.97,"benzo":"TED"},"emtiaScore":68.7,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":0.78,"op":"max","limit":1.5,"weight":60,"ratio":1,"contribution":60},{"key":"sediment","label":"Tortu","unit":"%","value":1.38,"op":"max","limit":0.3,"weight":40,"ratio":0.217391,"contribution":8.7}],"scoreModel":"Rafinasyon yükü modeli · FFA/Tortu"},{"id":85,"date":"2026-04-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"MV TC VICTORY","firm":"Sunar Agro SRL","country":"Romanya / Avusturya / Macaristan","tonnage":3204,"appearance":"","metrics":{"ffa":7.8,"oil":34.2,"moisture":7.31,"impurity":0.44,"protein":12.26,"dust":12.35,"hectoliter":51.01,"core":85.71,"bran":1.5,"starch":null},"emtiaScore":51.37,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":7.8,"op":"max","limit":2,"weight":35,"ratio":0.25641,"contribution":8.97},{"key":"oil","label":"Yağ","unit":"%","value":34.2,"op":"min","limit":42,"weight":35,"ratio":0.814286,"contribution":28.5},{"key":"moisture","label":"Rutubet","unit":"%","value":7.31,"op":"max","limit":5,"weight":15,"ratio":0.683995,"contribution":10.26},{"key":"dust","label":"Toz","unit":"%","value":12.35,"op":"max","limit":3,"weight":15,"ratio":0.242915,"contribution":3.64}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":86,"date":"2026-04-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"Cosecha","firm":"Cosecha","country":"Azerbaycan","tonnage":48,"appearance":"","metrics":{"ffa":1.58,"oil":37.92,"moisture":5.91,"impurity":0.12,"protein":12.58,"dust":2.11,"hectoliter":32.6,"core":84.96,"bran":12.81,"starch":null},"emtiaScore":94.29,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.58,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":37.92,"op":"min","limit":42,"weight":35,"ratio":0.902857,"contribution":31.6},{"key":"moisture","label":"Rutubet","unit":"%","value":5.91,"op":"max","limit":5,"weight":15,"ratio":0.846024,"contribution":12.69},{"key":"dust","label":"Toz","unit":"%","value":2.11,"op":"max","limit":3,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":87,"date":"2026-04-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"MV SEA ARIES","firm":"ADM Razgard","country":"Bulgaristan","tonnage":2011,"appearance":"","metrics":{"ffa":1.33,"oil":42.44,"moisture":5.57,"impurity":0.1,"protein":15.04,"dust":8.4,"hectoliter":43.94,"core":89.7,"bran":1.8,"starch":null},"emtiaScore":88.82,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.33,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":42.44,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":5.57,"op":"max","limit":5,"weight":15,"ratio":0.897666,"contribution":13.46},{"key":"dust","label":"Toz","unit":"%","value":8.4,"op":"max","limit":3,"weight":15,"ratio":0.357143,"contribution":5.36}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":88,"date":"2026-04-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"MV OLIMPIADA","firm":"Aker Agro","country":"Rusya","tonnage":2508,"appearance":"","metrics":{"ffa":1.78,"oil":46.38,"moisture":4.18,"impurity":0.41,"protein":13.74,"dust":6.72,"hectoliter":47.9,"core":91.18,"bran":1.69,"starch":null},"emtiaScore":91.7,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.78,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":46.38,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":4.18,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":6.72,"op":"max","limit":3,"weight":15,"ratio":0.446429,"contribution":6.7}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":89,"date":"2026-04-01","year":2026,"sourceYear":2026,"commodity":"Soya Tohumu","vessel":"MV SALACIA","firm":"","country":"Brezilya","tonnage":6985,"appearance":"","metrics":{"ffa":1.44,"oil":23.09,"moisture":11.8,"impurity":0.15,"protein":33.53},"emtiaScore":99.44,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.44,"op":"max","limit":1.5,"weight":30,"ratio":1,"contribution":30},{"key":"oil","label":"Yağ","unit":"%","value":23.09,"op":"min","limit":18.5,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":11.8,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":33.53,"op":"min","limit":34.5,"weight":20,"ratio":0.971884,"contribution":19.44},{"key":"impurity","label":"Empürite","unit":"%","value":0.15,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":90,"date":"2026-05-01","year":2026,"sourceYear":2026,"commodity":"Ayçiçek Tohumu","vessel":"Afamia Star","firm":"Sunar Agro","country":"Moldova","tonnage":4608,"appearance":"","metrics":{"ffa":2.14,"oil":43.48,"moisture":8.4,"impurity":6,"protein":15.9},"emtiaScore":84.53,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.14,"op":"max","limit":1.5,"weight":35,"ratio":0.700935,"contribution":24.53},{"key":"oil","label":"Yağ","unit":"%","value":43.48,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":8.4,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":6,"op":"max","limit":4,"weight":15,"ratio":0.666667,"contribution":10}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":91,"date":"2026-05-01","year":2026,"sourceYear":2026,"commodity":"Ayçiçek Tohumu","vessel":"MV Wisteria","firm":"Sami Agro","country":"Arjantin","tonnage":1931,"appearance":"","metrics":{"ffa":1.87,"oil":45.56,"moisture":7.2,"impurity":2.62,"protein":12.6},"emtiaScore":93.07,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.87,"op":"max","limit":1.5,"weight":35,"ratio":0.802139,"contribution":28.07},{"key":"oil","label":"Yağ","unit":"%","value":45.56,"op":"min","limit":40.5,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":7.2,"op":"max","limit":9,"weight":15,"ratio":1,"contribution":15},{"key":"impurity","label":"Empürite","unit":"%","value":2.62,"op":"max","limit":4,"weight":15,"ratio":1,"contribution":15}],"scoreModel":"Yağlı tohum verim modeli · Ayçiçek"},{"id":92,"date":"2026-05-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"MV AFAMIA STAR","firm":"Sunar Agro SRL","country":"Romanya / Ukrayna","tonnage":2774,"appearance":"","metrics":{"ffa":4.41,"oil":39.45,"moisture":7.58,"impurity":0.27,"protein":12.25,"dust":9.57,"hectoliter":48,"core":88.22,"bran":1.94,"starch":null},"emtiaScore":63.34,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":4.41,"op":"max","limit":2,"weight":35,"ratio":0.453515,"contribution":15.87},{"key":"oil","label":"Yağ","unit":"%","value":39.45,"op":"min","limit":42,"weight":35,"ratio":0.939286,"contribution":32.88},{"key":"moisture","label":"Rutubet","unit":"%","value":7.58,"op":"max","limit":5,"weight":15,"ratio":0.659631,"contribution":9.89},{"key":"dust","label":"Toz","unit":"%","value":9.57,"op":"max","limit":3,"weight":15,"ratio":0.31348,"contribution":4.7}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":93,"date":"2026-05-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"MV Nevaleader 2","firm":"Ags Food","country":"Rusya","tonnage":5337.08,"appearance":"","metrics":{"ffa":2.16,"oil":41.42,"moisture":4.72,"impurity":0.33,"protein":13.7,"dust":4.73,"hectoliter":47.8,"core":90.95,"bran":2.5,"starch":null},"emtiaScore":91.44,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.16,"op":"max","limit":2,"weight":35,"ratio":0.925926,"contribution":32.41},{"key":"oil","label":"Yağ","unit":"%","value":41.42,"op":"min","limit":42,"weight":35,"ratio":0.98619,"contribution":34.52},{"key":"moisture","label":"Rutubet","unit":"%","value":4.72,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":4.73,"op":"max","limit":3,"weight":15,"ratio":0.634249,"contribution":9.51}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":94,"date":"2026-05-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"MV CPT AHMAD 2","firm":"ADM Razgard","country":"Bulgaristan","tonnage":2200,"appearance":"","metrics":{"ffa":1.38,"oil":42.08,"moisture":5.11,"impurity":0.26,"protein":15.93,"dust":7.96,"hectoliter":43.21,"core":88.13,"bran":0.95,"starch":null},"emtiaScore":90.33,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.38,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":42.08,"op":"min","limit":42,"weight":35,"ratio":1,"contribution":35},{"key":"moisture","label":"Rutubet","unit":"%","value":5.11,"op":"max","limit":5,"weight":15,"ratio":0.978474,"contribution":14.68},{"key":"dust","label":"Toz","unit":"%","value":7.96,"op":"max","limit":3,"weight":15,"ratio":0.376884,"contribution":5.65}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":95,"date":"2026-05-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"MV GHAZAL STAR","firm":"Interstarch/Rogluten/Heinz / Adm (Hungrana)","country":"Ukrayna / Avusturya / Macar / Romanya","tonnage":3657,"appearance":"","metrics":{"ffa":4.04,"oil":34.71,"moisture":7.51,"impurity":0.12,"protein":12.85,"dust":10.78,"hectoliter":48.42,"core":88.52,"bran":0.58,"starch":null},"emtiaScore":60.42,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":4.04,"op":"max","limit":2,"weight":35,"ratio":0.49505,"contribution":17.33},{"key":"oil","label":"Yağ","unit":"%","value":34.71,"op":"min","limit":42,"weight":35,"ratio":0.826429,"contribution":28.93},{"key":"moisture","label":"Rutubet","unit":"%","value":7.51,"op":"max","limit":5,"weight":15,"ratio":0.665779,"contribution":9.99},{"key":"dust","label":"Toz","unit":"%","value":10.78,"op":"max","limit":3,"weight":15,"ratio":0.278293,"contribution":4.17}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":96,"date":"2026-05-01","year":2026,"sourceYear":2026,"commodity":"Soya Tohumu","vessel":"MV AMIS JUSTICE","firm":"","country":"Brezilya","tonnage":9000,"appearance":"","metrics":{"ffa":1.67,"oil":22.73,"moisture":11.7,"impurity":0.91,"protein":33.86},"emtiaScore":96.58,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.67,"op":"max","limit":1.5,"weight":30,"ratio":0.898204,"contribution":26.95},{"key":"oil","label":"Yağ","unit":"%","value":22.73,"op":"min","limit":18.5,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":11.7,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":33.86,"op":"min","limit":34.5,"weight":20,"ratio":0.981449,"contribution":19.63},{"key":"impurity","label":"Empürite","unit":"%","value":0.91,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":97,"date":"2026-05-01","year":2026,"sourceYear":2026,"commodity":"Soya Tohumu","vessel":"MV BBG FOREVER","firm":"","country":"Brezilya","tonnage":11019,"appearance":"","metrics":{"ffa":2.09,"oil":23.1,"moisture":11.6,"impurity":0.54,"protein":33.92},"emtiaScore":91.19,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.09,"op":"max","limit":1.5,"weight":30,"ratio":0.717703,"contribution":21.53},{"key":"oil","label":"Yağ","unit":"%","value":23.1,"op":"min","limit":18.5,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":11.6,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":33.92,"op":"min","limit":34.5,"weight":20,"ratio":0.983188,"contribution":19.66},{"key":"impurity","label":"Empürite","unit":"%","value":0.54,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":98,"date":"2026-06-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"MV JENNY M","firm":"Adm Razgrad/Bulg.","country":"Bulgaristan","tonnage":2025.3,"appearance":"","metrics":{"ffa":1.83,"oil":41.41,"moisture":4.95,"impurity":0.4,"protein":14.51,"dust":7.32,"hectoliter":39.71,"core":88.11,"bran":4.17,"starch":null},"emtiaScore":90.66,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":1.83,"op":"max","limit":2,"weight":35,"ratio":1,"contribution":35},{"key":"oil","label":"Yağ","unit":"%","value":41.41,"op":"min","limit":42,"weight":35,"ratio":0.985952,"contribution":34.51},{"key":"moisture","label":"Rutubet","unit":"%","value":4.95,"op":"max","limit":5,"weight":15,"ratio":1,"contribution":15},{"key":"dust","label":"Toz","unit":"%","value":7.32,"op":"max","limit":3,"weight":15,"ratio":0.409836,"contribution":6.15}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"},{"id":99,"date":"2026-06-01","year":2026,"sourceYear":2026,"commodity":"Soya Tohumu","vessel":"MV SW SOUTH WİND","firm":"","country":"Brezilya","tonnage":14964,"appearance":"","metrics":{"ffa":2.33,"oil":23.07,"moisture":11.4,"impurity":0.34,"protein":34.36},"emtiaScore":89.23,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":2.33,"op":"max","limit":1.5,"weight":30,"ratio":0.643777,"contribution":19.31},{"key":"oil","label":"Yağ","unit":"%","value":23.07,"op":"min","limit":18.5,"weight":30,"ratio":1,"contribution":30},{"key":"moisture","label":"Rutubet","unit":"%","value":11.4,"op":"max","limit":12,"weight":20,"ratio":1,"contribution":20},{"key":"protein","label":"Protein","unit":"%","value":34.36,"op":"min","limit":34.5,"weight":20,"ratio":0.995942,"contribution":19.92},{"key":"impurity","label":"Empürite","unit":"%","value":0.34,"op":"max","limit":2,"weight":0,"ratio":1,"contribution":0}],"scoreModel":"Yağlı tohum verim modeli · Soya"},{"id":100,"date":"2026-07-01","year":2026,"sourceYear":2026,"commodity":"Mısırözü","vessel":"MV FIRTINA S","firm":"Sunar Agro","country":"Macaristan Romanya","tonnage":1121,"appearance":"","metrics":{"ffa":10.56,"oil":37.02,"moisture":7.28,"impurity":0.55,"protein":12.96,"dust":11.1,"hectoliter":47.85,"core":86.49,"bran":1.86,"starch":null},"emtiaScore":51.83,"scoreBreakdown":[{"key":"ffa","label":"FFA","unit":"%","value":10.56,"op":"max","limit":2,"weight":35,"ratio":0.189394,"contribution":6.63},{"key":"oil","label":"Yağ","unit":"%","value":37.02,"op":"min","limit":42,"weight":35,"ratio":0.881429,"contribution":30.85},{"key":"moisture","label":"Rutubet","unit":"%","value":7.28,"op":"max","limit":5,"weight":15,"ratio":0.686813,"contribution":10.3},{"key":"dust","label":"Toz","unit":"%","value":11.1,"op":"max","limit":3,"weight":15,"ratio":0.27027,"contribution":4.05}],"scoreModel":"Yağ verimi ve depolama modeli · Mısırözü"}];
    const REPORT_META = {"generatedAt":"2026-07-30T12:29:55.178Z","sourceFiles":["Gemiler 2025.xlsx","Gemiler 2026.xlsx"],"recordCount":100};
    const USER_RECORDS_KEY = "gemiler-user-records-v1";
    const storageState = { available: true };
    const SUPPORTED_COMMODITIES = new Set([
      "Ham Ayçiçek Yağı",
      "Ayçiçek Tohumu",
      "Mısırözü",
      "Soya Tohumu",
    ]);
    const METRIC_KEYS = new Set([
      "ffa",
      "oil",
      "moisture",
      "impurity",
      "protein",
      "sediment",
      "wax",
      "phosphorus",
      "benzo",
      "dust",
      "hectoliter",
      "core",
      "bran",
      "starch",
    ]);

    const parseLocalizedNumber = (value) => {
      if (typeof value === "number") return Number.isFinite(value) ? value : null;
      if (typeof value !== "string" || !value.trim()) return null;
      const raw = value.trim();
      const hasComma = raw.includes(",");
      const hasDot = raw.includes(".");
      const normalized = hasComma && hasDot
        ? raw.lastIndexOf(",") > raw.lastIndexOf(".")
          ? raw.replace(/\./g, "").replace(",", ".")
          : raw.replace(/,/g, "")
        : hasComma
          ? raw.replace(",", ".")
          : raw;
      const numeric = Number(normalized);
      return Number.isFinite(numeric) ? numeric : null;
    };

    const isValidIsoDate = (value) => {
      if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
      const [year, month, day] = value.split("-").map(Number);
      const date = new Date(Date.UTC(year, month - 1, day));
      return (
        date.getUTCFullYear() === year &&
        date.getUTCMonth() === month - 1 &&
        date.getUTCDate() === day
      );
    };

    const normalizeMetricValues = (metrics) => {
      if (!metrics || typeof metrics !== "object" || Array.isArray(metrics)) return null;
      const normalized = {};
      for (const [key, rawValue] of Object.entries(metrics)) {
        if (!METRIC_KEYS.has(key) || rawValue == null || rawValue === "") continue;
        const numeric = parseLocalizedNumber(rawValue);
        if (numeric != null) {
          if (numeric < 0) return null;
          normalized[key] = numeric;
          continue;
        }
        if (
          key === "benzo" &&
          typeof rawValue === "string" &&
          /^TED$/i.test(rawValue.trim())
        ) {
          normalized[key] = "TED";
          continue;
        }
        return null;
      }
      return normalized;
    };

    const normalizeUserRecordShape = (
      record,
      index = 0,
      { allowGeneratedId = false } = {}
    ) => {
      if (!record || typeof record !== "object" || Array.isArray(record)) return null;
      const date = typeof record.date === "string" ? record.date.trim() : "";
      const commodity = typeof record.commodity === "string" ? record.commodity.trim() : "";
      const vessel = typeof record.vessel === "string" ? record.vessel.trim() : "";
      const country = typeof record.country === "string" ? record.country.trim() : "";
      const tonnage = parseLocalizedNumber(record.tonnage);
      const metrics = normalizeMetricValues(record.metrics);
      if (
        !isValidIsoDate(date) ||
        !SUPPORTED_COMMODITIES.has(commodity) ||
        !vessel ||
        !country ||
        tonnage == null ||
        tonnage <= 0 ||
        metrics == null
      ) return null;

      const parsedId = parseLocalizedNumber(record.id);
      const hasValidId = Number.isSafeInteger(parsedId) && parsedId > 0;
      if (!hasValidId && !allowGeneratedId) return null;
      const id = hasValidId ? parsedId : Date.now() + index;
      const hasLongitude = record.originLongitude != null && String(record.originLongitude).trim() !== "";
      const hasLatitude = record.originLatitude != null && String(record.originLatitude).trim() !== "";
      if (hasLongitude !== hasLatitude) return null;

      const normalized = {
        id,
        date,
        year: Number(date.slice(0, 4)),
        sourceYear: Number(date.slice(0, 4)),
        commodity,
        vessel,
        firm: String(record.firm || "").trim(),
        country,
        tonnage,
        appearance: String(record.appearance || "").trim(),
        metrics,
        userCreated: true,
      };
      if (hasLongitude && hasLatitude) {
        const longitude = parseLocalizedNumber(record.originLongitude);
        const latitude = parseLocalizedNumber(record.originLatitude);
        if (
          longitude == null ||
          latitude == null ||
          longitude < -180 ||
          longitude > 180 ||
          latitude < -60 ||
          latitude > 85
        ) return null;
        normalized.originLongitude = longitude;
        normalized.originLatitude = latitude;
      }
      return normalized;
    };

    const readUserRecords = () => {
      try {
        const parsed = JSON.parse(window.localStorage?.getItem(USER_RECORDS_KEY) || "[]");
        if (!Array.isArray(parsed)) return [];
        const usedIds = new Set(BASE_DATA.map((record) => record.id));
        let nextId = Date.now();
        return parsed
          .filter((record) => record?.userCreated === true)
          .map((record, index) => normalizeUserRecordShape(record, index))
          .filter(Boolean)
          .map((record) => {
            if (usedIds.has(record.id)) {
              while (usedIds.has(nextId)) nextId += 1;
              record.id = nextId;
              nextId += 1;
            }
            usedIds.add(record.id);
            return record;
          });
      } catch {
        try {
          window.localStorage?.removeItem(USER_RECORDS_KEY);
        } catch {
          storageState.available = false;
        }
        return [];
      }
    };
    let userRecords = readUserRecords();
    const DATA = [...BASE_DATA, ...userRecords];
    const metricCatalog = [
      ["ffa", "FFA", "%"],
      ["oil", "Yağ", "%"],
      ["moisture", "Rutubet / Nem", "%"],
      ["impurity", "Empürite", "%"],
      ["protein", "Protein (N:6,25)", "%"],
      ["sediment", "Tortu", "%"],
      ["wax", "Wax", "ppm"],
      ["phosphorus", "Fosfor", "ppm"],
      ["benzo", "Benzo(a)piren", "ppb"],
      ["dust", "Toz", "%"],
      ["hectoliter", "Hektolitre", ""],
      ["core", "Öz miktarı", "%"],
      ["bran", "Kepek", "%"],
      ["starch", "Nişasta", "%"],
    ];

    const scoreModels = {
      "Ham Ayçiçek Yağı": [
        { key: "ffa", label: "FFA", unit: "%", op: "max", limit: 1.5, weight: 60 },
        { key: "sediment", label: "Tortu", unit: "%", op: "max", limit: 0.3, weight: 40 },
      ],
      "Ayçiçek Tohumu": [
        { key: "ffa", label: "FFA", unit: "%", op: "max", limit: 1.5, weight: 35 },
        { key: "oil", label: "Yağ", unit: "%", op: "min", limit: 40.5, weight: 35 },
        { key: "moisture", label: "Rutubet", unit: "%", op: "max", limit: 9, weight: 15 },
        { key: "impurity", label: "Empürite", unit: "%", op: "max", limit: 4, weight: 15 },
      ],
      "Mısırözü": [
        { key: "ffa", label: "FFA", unit: "%", op: "max", limit: 2, weight: 35 },
        { key: "oil", label: "Yağ", unit: "%", op: "min", limit: 42, weight: 35 },
        { key: "moisture", label: "Rutubet", unit: "%", op: "max", limit: 5, weight: 15 },
        { key: "dust", label: "Toz", unit: "%", op: "max", limit: 3, weight: 15 },
      ],
    };

    const scoreModelLabels = {
      "Ham Ayçiçek Yağı": "Rafinasyon yükü modeli · FFA/Tortu",
      "Ayçiçek Tohumu": "Yağlı tohum verim modeli · Ayçiçek",
      "Mısırözü": "Yağ verimi ve depolama modeli · Mısırözü",
    };

    const scoreModelForRecord = (record) => {
      if (record.commodity !== "Soya Tohumu") {
        return {
          label: scoreModelLabels[record.commodity] || "Bitkisel yağ kalite modeli",
          parameters: scoreModels[record.commodity] || [],
        };
      }
      const americanOrigin = /Brezilya|Arjantin/i.test(record.country);
      const domesticOrigin = /Türkiye/i.test(record.country);
      const oilLimit = domesticOrigin ? 19 : americanOrigin ? 18.5 : 18;
      const proteinLimit = americanOrigin ? 34.5 : 33;
      return {
        label: "Yağlı tohum verim modeli · Soya",
        parameters: [
          { key: "ffa", label: "FFA", unit: "%", op: "max", limit: 1.5, weight: 30 },
          { key: "oil", label: "Yağ", unit: "%", op: "min", limit: oilLimit, weight: 30 },
          { key: "moisture", label: "Rutubet", unit: "%", op: "max", limit: 12, weight: 20 },
          { key: "protein", label: "Protein", unit: "%", op: "min", limit: proteinLimit, weight: 20 },
          { key: "impurity", label: "Empürite", unit: "%", op: "max", limit: 2, weight: 0 },
        ],
      };
    };

    const calculateCommodityScore = (record) => {
      const modelConfig = scoreModelForRecord(record);
      if (!modelConfig.parameters.length) {
        return { score: null, breakdown: [], model: "" };
      }
      const valuesAvailable = modelConfig.parameters
        .filter(({ weight }) => weight > 0)
        .every(({ key }) =>
          typeof record.metrics[key] === "number" && Number.isFinite(record.metrics[key])
        );
      if (!valuesAvailable) {
        return { score: null, breakdown: [], model: modelConfig.label };
      }
      const breakdown = modelConfig.parameters.map(({ key, label, unit, op, limit, weight }) => {
        const value = record.metrics[key];
        const hasNumericValue = typeof value === "number" && Number.isFinite(value);
        const ratio = hasNumericValue
          ? op === "max"
            ? Math.max(0, Math.min(1, limit / value))
            : Math.max(0, Math.min(1, value / limit))
          : null;
        const contribution = weight > 0 && ratio != null ? ratio * weight : 0;
        return {
          key,
          label,
          unit,
          value,
          op,
          limit,
          weight,
          ratio: ratio == null ? null : Number(ratio.toFixed(6)),
          contribution: Number(contribution.toFixed(2)),
        };
      });
      return {
        score: Number(breakdown.reduce((sum, item) => sum + item.contribution, 0).toFixed(2)),
        breakdown,
        model: modelConfig.label,
      };
    };

    userRecords = userRecords
      .map((record) => {
        const recalculated = calculateCommodityScore(record);
        return {
          ...record,
          emtiaScore: recalculated.score,
          scoreBreakdown: recalculated.breakdown,
          scoreModel: recalculated.model,
        };
      })
      .filter((record) => Number.isFinite(record.emtiaScore));
    DATA.length = 0;
    DATA.push(...BASE_DATA, ...userRecords);
    try {
      window.localStorage?.setItem(USER_RECORDS_KEY, JSON.stringify(userRecords));
    } catch {
      storageState.available = false;
    }

    const $ = (selector) => document.querySelector(selector);
    const elements = {
      search: $("#search"),
      year: $("#year-filter"),
      commodity: $("#commodity-filter"),
      countryRoot: $("#country-filter"),
      countryButton: $("#country-filter-button"),
      countryLabel: $("#country-filter-label"),
      countryMenu: $("#country-filter-menu"),
      countryOptions: $("#country-filter-options"),
      countrySelectionCount: $("#country-selection-count"),
      sort: $("#sort-order"),
      reset: $("#reset-filters"),
      theme: $("#theme-toggle"),
      rows: $("#shipment-rows"),
      dialog: $("#detail-dialog"),
      recordDialog: $("#record-dialog"),
      recordForm: $("#record-form"),
      recordDate: $("#record-date"),
      recordCommodity: $("#record-commodity"),
      recordVessel: $("#record-vessel"),
      recordFirm: $("#record-firm"),
      recordCountry: $("#record-country"),
      recordCountryList: $("#record-country-list"),
      recordTonnage: $("#record-tonnage"),
      recordAppearance: $("#record-appearance"),
      recordLongitude: $("#record-longitude"),
      recordLatitude: $("#record-latitude"),
      recordMetrics: $("#record-metrics-fields"),
      recordQualityPreset: $("#record-quality-preset"),
      recordScorePreview: $("#record-score-preview"),
      importUserData: $("#import-user-data"),
      toast: $("#toast"),
      mapSvg: $("#origin-map svg"),
      mapCamera: $("#map-camera"),
    };
    const selectedCountries = new Set();
    let availableCountries = [];

    const numberFormat = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 });
    const compactFormat = new Intl.NumberFormat("tr-TR", {
      notation: "compact",
      maximumFractionDigits: 1,
    });

    const escapeHtml = (value) =>
      String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const formatPeriod = (isoDate) =>
      new Intl.DateTimeFormat("tr-TR", { month: "short", year: "numeric" })
        .format(new Date(`${isoDate}T12:00:00`))
        .replace(".", "");

    const formatMetric = (value, unit = "") => {
      if (value === "TED") return "TED";
      if (typeof value !== "number") return escapeHtml(value || "—");
      return `${numberFormat.format(value)}${unit ? ` ${unit}` : ""}`;
    };

    const addOptions = (select, values) => {
      values.forEach((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.append(option);
      });
    };

    const syncSelectOptions = (select, defaultLabel, values) => {
      const selected = select.value;
      select.innerHTML = `<option value="">${escapeHtml(defaultLabel)}</option>`;
      addOptions(select, values);
      select.value = values.includes(selected) ? selected : "";
    };

    const updateCountryFilterUI = () => {
      const names = [...selectedCountries].sort((a, b) => a.localeCompare(b, "tr"));
      elements.countryLabel.textContent = names.length === 0
        ? "Tüm ülkeler"
        : names.length <= 2
          ? names.join(" + ")
          : `${names.length} ülke seçili`;
      elements.countrySelectionCount.textContent = `${names.length} seçili`;
      elements.countryButton.classList.toggle("has-selection", names.length > 0);
    };

    const refreshCountryFilterOptions = () => {
      const counts = new Map();
      DATA.forEach((record) => {
        [...new Set(countryNamesForRecord(record))].forEach((country) => {
          counts.set(country, (counts.get(country) || 0) + 1);
        });
      });
      availableCountries = [...counts.keys()].sort((a, b) => a.localeCompare(b, "tr"));
      [...selectedCountries].forEach((country) => {
        if (!availableCountries.includes(country)) selectedCountries.delete(country);
      });
      elements.countryOptions.innerHTML = availableCountries.map((country) => `
        <label class="multi-option">
          <input type="checkbox" data-country="${escapeHtml(country)}"
            ${selectedCountries.has(country) ? "checked" : ""}>
          <span class="multi-option-name">${escapeHtml(country)}</span>
          <span class="multi-option-count">${counts.get(country)}</span>
        </label>
      `).join("");
      updateCountryFilterUI();
    };

    const refreshFilterOptions = () => {
      syncSelectOptions(
        elements.year,
        "Tüm yıllar",
        [...new Set(DATA.map((record) => String(record.year)))].sort()
      );
      syncSelectOptions(
        elements.commodity,
        "Tüm emtialar",
        [...new Set(DATA.map((record) => record.commodity))].sort((a, b) => a.localeCompare(b, "tr"))
      );
      refreshCountryFilterOptions();
      elements.recordCountryList.innerHTML = [...new Set([
        ...DATA.map((record) => record.country),
        ...originDefinitions.map((origin) => origin.name),
      ])]
        .sort((a, b) => a.localeCompare(b, "tr"))
        .map((country) => `<option value="${escapeHtml(country)}"></option>`)
        .join("");
    };

    const originDefinitions = [
      { name: "Rusya", lon: 60, lat: 58, aliases: ["rusya"] },
      { name: "Brezilya", lon: -51, lat: -10, aliases: ["brezilya"] },
      { name: "Ukrayna", lon: 31, lat: 49, aliases: ["ukrayna"] },
      { name: "Romanya", lon: 25, lat: 46, aliases: ["romanya"] },
      { name: "Bulgaristan", lon: 25.5, lat: 42.7, aliases: ["bulgaristan"] },
      { name: "Moldova", lon: 28.6, lat: 47.1, aliases: ["moldova"] },
      { name: "Macaristan", lon: 19.5, lat: 47.1, aliases: ["macar"] },
      { name: "Avusturya", lon: 14.3, lat: 47.5, aliases: ["avusturya"] },
      { name: "Sırbistan", lon: 21, lat: 44, aliases: ["sırbistan", "sırp"] },
      { name: "Kazakistan", lon: 67, lat: 48, aliases: ["kazakistan"] },
      { name: "Arjantin", lon: -64, lat: -34, aliases: ["arjantin"] },
      { name: "Özbekistan", lon: 64.6, lat: 41.4, aliases: ["özbekistan"] },
      { name: "Azerbaycan", lon: 47.6, lat: 40.4, aliases: ["azerbaycan"] },
    ];

    const mapLabelOffsets = {
      Rusya: [12, -10],
      Brezilya: [12, 2],
      Ukrayna: [10, -18],
      Romanya: [-62, 15],
      Bulgaristan: [10, 28],
      Moldova: [-60, -24],
      Macaristan: [-72, -12],
      Avusturya: [-68, -28],
      Sırbistan: [-60, 30],
      Kazakistan: [12, -12],
      Arjantin: [12, 4],
      Özbekistan: [12, 18],
      Azerbaycan: [12, 32],
    };

    const projectMap = (lon, lat) => [
      ((lon + 180) / 360) * 1000,
      ((85 - Math.max(-60, Math.min(85, lat))) / 145) * 470,
    ];

    const originsForRecord = (record) => {
      if (
        typeof record.originLongitude === "number" &&
        typeof record.originLatitude === "number"
      ) {
        return [{
          name: record.country,
          lon: record.originLongitude,
          lat: record.originLatitude,
          aliases: [],
        }];
      }
      const countryText = record.country.toLocaleLowerCase("tr-TR");
      return originDefinitions.filter((origin) =>
        origin.aliases.some((alias) => countryText.includes(alias))
      );
    };

    const countryNamesForRecord = (record) => {
      const origins = originsForRecord(record);
      return origins.length ? origins.map((origin) => origin.name) : [record.country];
    };

    refreshFilterOptions();

    const aggregateOrigins = (rows) => {
      const map = new Map();
      rows.forEach((record) => {
        const origins = originsForRecord(record);
        if (!origins.length) return;
        const tonnageShare = record.tonnage / origins.length;
        origins.forEach((origin) => {
          const item = map.get(origin.name) || {
            ...origin,
            tonnage: 0,
            records: 0,
            scoreTotal: 0,
            scoreCount: 0,
          };
          item.tonnage += tonnageShare;
          item.records += 1;
          if (typeof record.emtiaScore === "number") {
            item.scoreTotal += record.emtiaScore;
            item.scoreCount += 1;
          }
          map.set(origin.name, item);
        });
      });
      return [...map.values()].sort((a, b) => b.tonnage - a.tonnage);
    };

    const renderOriginMap = (rows) => {
      const origins = aggregateOrigins(rows);
      const routeLayer = $("#map-routes");
      const pointLayer = $("#map-points");
      const labelLayer = $("#map-labels");
      const destinationLayer = $("#map-destination");
      const list = $("#map-origin-list");
      const destination = projectMap(35.24, 39);

      destinationLayer.innerHTML = `
        <g class="map-fixed-overlay" data-map-anchor data-map-x="${destination[0]}" data-map-y="${destination[1]}">
          <circle class="map-destination-ring" cx="${destination[0]}" cy="${destination[1]}" r="12"></circle>
          <circle class="map-destination-dot" cx="${destination[0]}" cy="${destination[1]}" r="4"></circle>
          <text class="map-label" x="${destination[0] + 15}" y="${destination[1] - 7}">Türkiye</text>
          <text class="map-label-value" x="${destination[0] + 15}" y="${destination[1] + 7}">varış</text>
        </g>`;

      if (!origins.length) {
        routeLayer.innerHTML = "";
        pointLayer.innerHTML = "";
        labelLayer.innerHTML = "";
        list.innerHTML = '<div class="empty">Seçili kayıtlarda eşleştirilebilir menşe yok.</div>';
        $("#map-summary-copy").textContent = "Filtrelenen görünümde menşe verisi yok";
        syncMapOverlayPresentation();
        return;
      }

      const maxTonnage = origins[0].tonnage || 1;
      routeLayer.innerHTML = origins.map((origin) => {
        const [x, y] = projectMap(origin.lon, origin.lat);
        const middleX = (x + destination[0]) / 2;
        const middleY = Math.min(y, destination[1]) - 34 - Math.abs(x - destination[0]) * 0.05;
        const width = 0.9 + Math.sqrt(origin.tonnage / maxTonnage) * 2.2;
        return `<path class="map-route" style="stroke-width:${width}" d="M${x},${y} Q${middleX},${middleY} ${destination[0]},${destination[1]}">
          <title>${escapeHtml(origin.name)} → Türkiye · ${numberFormat.format(origin.tonnage)} MT</title>
        </path>`;
      }).join("");

      pointLayer.innerHTML = origins.map((origin) => {
        const [x, y] = projectMap(origin.lon, origin.lat);
        const radius = 5 + Math.sqrt(origin.tonnage / maxTonnage) * 12;
        const averageScore = origin.scoreCount ? origin.scoreTotal / origin.scoreCount : null;
        return `<g class="map-fixed-overlay" data-map-anchor data-map-x="${x}" data-map-y="${y}">
          <circle class="map-bubble" cx="${x}" cy="${y}" r="${radius}">
            <title>${escapeHtml(origin.name)} · ${numberFormat.format(origin.tonnage)} MT · ${origin.records} sevkiyat${averageScore == null ? "" : ` · Ortalama skor ${numberFormat.format(averageScore)}`}</title>
          </circle>
        </g>`;
      }).join("");

      labelLayer.innerHTML = origins.map((origin, index) => {
        const [x, y] = projectMap(origin.lon, origin.lat);
        const [dx, dy] = mapLabelOffsets[origin.name] || [10, -10];
        return `<g class="map-fixed-overlay map-label-group" data-map-anchor data-map-x="${x}" data-map-y="${y}" data-map-label-rank="${index}">
          <text class="map-label" x="${x + dx}" y="${y + dy}">${escapeHtml(origin.name)}</text>
          <text class="map-label-value" x="${x + dx}" y="${y + dy + 13}">${escapeHtml(compactFormat.format(origin.tonnage))} MT</text>
        </g>`;
      }).join("");

      list.innerHTML = origins.slice(0, 6).map((origin, index) => {
        const averageScore = origin.scoreCount ? origin.scoreTotal / origin.scoreCount : null;
        return `<div class="map-origin-row">
          <span class="map-rank">${index + 1}</span>
          <span class="map-origin-name">${escapeHtml(origin.name)}
            <small>${origin.records} sevkiyat${averageScore == null ? "" : ` · skor ${numberFormat.format(averageScore)}`}</small>
          </span>
          <span class="map-origin-tonnage">${compactFormat.format(origin.tonnage)} MT</span>
        </div>`;
      }).join("");

      $("#map-summary-copy").textContent =
        `${origins.length} menşe · ${numberFormat.format(origins.reduce((sum, origin) => sum + origin.tonnage, 0))} MT dağıtılmış tonaj`;
      syncMapOverlayPresentation();
    };

    const mapView = {
      scale: 1,
      panX: 0,
      panY: 0,
      dragging: false,
      pointerId: null,
      lastMapX: 0,
      lastMapY: 0,
    };

    const clientToMapPoint = (clientX, clientY) => {
      try {
        if (
          typeof elements.mapSvg.createSVGPoint === "function" &&
          typeof elements.mapSvg.getScreenCTM === "function"
        ) {
          const matrix = elements.mapSvg.getScreenCTM();
          if (matrix && typeof matrix.inverse === "function") {
            const point = elements.mapSvg.createSVGPoint();
            point.x = clientX;
            point.y = clientY;
            const converted = point.matrixTransform(matrix.inverse());
            if (Number.isFinite(converted.x) && Number.isFinite(converted.y)) {
              return { x: converted.x, y: converted.y };
            }
          }
        }
      } catch {}

      const rect = elements.mapSvg.getBoundingClientRect();
      const scale = Math.max(
        0.0001,
        Math.min(rect.width / 1000 || 1, rect.height / 470 || 1)
      );
      const offsetX = (rect.width - 1000 * scale) / 2;
      const offsetY = (rect.height - 470 * scale) / 2;
      return {
        x: (clientX - rect.left - offsetX) / scale,
        y: (clientY - rect.top - offsetY) / scale,
      };
    };

    const clampMapPan = () => {
      const maxX = (mapView.scale - 1) * 500;
      const maxY = (mapView.scale - 1) * 235;
      mapView.panX = Math.max(-maxX, Math.min(maxX, mapView.panX));
      mapView.panY = Math.max(-maxY, Math.min(maxY, mapView.panY));
    };

    const syncMapOverlayPresentation = () => {
      const rect = elements.mapSvg.getBoundingClientRect();
      const baseScreenScale = Math.max(
        0.0001,
        Math.min(rect.width / 1000 || 1, rect.height / 470 || 1)
      );
      const responsiveBoost = Math.max(1, Math.min(3, 0.82 / baseScreenScale));
      const inverseScale = Number(
        (responsiveBoost / Math.pow(mapView.scale, 1.12)).toFixed(5)
      );
      const anchors = elements.mapCamera.querySelectorAll?.("[data-map-anchor]") || [];
      anchors.forEach((overlay) => {
        const x = Number(overlay.dataset.mapX);
        const y = Number(overlay.dataset.mapY);
        if (!Number.isFinite(x) || !Number.isFinite(y)) return;
        overlay.setAttribute(
          "transform",
          `translate(${x} ${y}) scale(${inverseScale}) translate(${-x} ${-y})`
        );
      });

      const compactMap = rect.width > 0 && rect.width < 560;
      const visibleLabelCount = mapView.scale < 1.5
        ? compactMap ? 4 : 6
        : mapView.scale < 2.5
          ? compactMap ? 7 : 10
          : Infinity;
      const labels = elements.mapCamera.querySelectorAll?.("[data-map-label-rank]") || [];
      labels.forEach((label) => {
        const isVisible = Number(label.dataset.mapLabelRank) < visibleLabelCount;
        label.classList.toggle("is-hidden", !isVisible);
        label.setAttribute("aria-hidden", String(!isVisible));
      });
    };

    const applyMapTransform = () => {
      clampMapPan();
      elements.mapCamera.setAttribute(
        "transform",
        `translate(${mapView.panX} ${mapView.panY}) translate(500 235) scale(${mapView.scale}) translate(-500 -235)`
      );
      $("#map-zoom-level").textContent = `%${Math.round(mapView.scale * 100)}`;
      $("#origin-map").classList.toggle("is-zoomed", mapView.scale > 1);
      syncMapOverlayPresentation();
    };

    const setMapZoom = (nextScale, anchorX = 500, anchorY = 235) => {
      const previousScale = mapView.scale;
      const clampedScale = Math.max(1, Math.min(6, Number(nextScale.toFixed(2))));
      if (clampedScale === 1) {
        mapView.scale = 1;
        mapView.panX = 0;
        mapView.panY = 0;
      } else if (clampedScale !== previousScale) {
        const ratio = clampedScale / previousScale;
        mapView.panX = anchorX - 500 - ratio * (anchorX - 500 - mapView.panX);
        mapView.panY = anchorY - 235 - ratio * (anchorY - 235 - mapView.panY);
        mapView.scale = clampedScale;
      }
      applyMapTransform();
    };

    const resetMapView = () => {
      mapView.scale = 1;
      mapView.panX = 0;
      mapView.panY = 0;
      applyMapTransform();
    };

    const currentRows = () => {
      const query = elements.search.value.trim().toLocaleLowerCase("tr-TR");
      const rows = DATA.filter((record) => {
        const haystack = [
          record.vessel,
          record.firm,
          record.country,
          record.commodity,
          record.appearance,
        ]
          .join(" ")
          .toLocaleLowerCase("tr-TR");
        return (
          (!query || haystack.includes(query)) &&
          (!elements.year.value || String(record.year) === elements.year.value) &&
          (!elements.commodity.value || record.commodity === elements.commodity.value) &&
          (
            selectedCountries.size === 0 ||
            countryNamesForRecord(record).some((country) => selectedCountries.has(country))
          )
        );
      });
      const sorters = {
        "date-desc": (a, b) => b.date.localeCompare(a.date) || b.tonnage - a.tonnage,
        "tonnage-desc": (a, b) => b.tonnage - a.tonnage || b.date.localeCompare(a.date),
        "score-desc": (a, b) =>
          (b.emtiaScore ?? -Infinity) - (a.emtiaScore ?? -Infinity) ||
          b.tonnage - a.tonnage,
        "commodity-asc": (a, b) =>
          a.commodity.localeCompare(b.commodity, "tr") ||
          b.date.localeCompare(a.date),
      };
      return rows.sort(sorters[elements.sort.value] || sorters["date-desc"]);
    };

    const renderKpis = (rows) => {
      const totalTonnage = rows.reduce((sum, record) => sum + record.tonnage, 0);
      const scored = rows.filter((record) => typeof record.emtiaScore === "number");
      const averageScore = scored.length
        ? scored.reduce((sum, record) => sum + record.emtiaScore, 0) / scored.length
        : null;
      const countryCount = new Set(
        rows.flatMap((record) => countryNamesForRecord(record))
      ).size;

      $("#kpi-shipments").textContent = numberFormat.format(rows.length);
      $("#kpi-tonnage").textContent = compactFormat.format(totalTonnage);
      $("#kpi-tonnage-note").textContent = `${numberFormat.format(totalTonnage)} metrik ton`;
      $("#kpi-score").textContent = averageScore == null ? "—" : numberFormat.format(averageScore);
      $("#kpi-score-note").textContent = scored.length
        ? `${scored.length} skorlu sevkiyatın aritmetik ortalaması`
        : "Seçili kayıtlarda skor modeli yok";
      $("#kpi-countries").textContent = numberFormat.format(countryCount);
    };

    const insightIcons = {
      origin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="8"></circle><path d="M4 12h16M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16"></path>
      </svg>`,
      commodity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 21V10M12 14c-4 0-7-2.4-7-6 4 0 7 2.4 7 6ZM12 11c4 0 7-2.4 7-6-4 0-7 2.4-7 6Z"></path>
      </svg>`,
      score: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path>
      </svg>`,
      vessel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M3 14h18l-3 5H8l-5-5ZM7 14V8h9v6M10 8V5h4v3"></path>
      </svg>`,
    };

    const renderInsights = (rows) => {
      const root = $("#insight-grid");
      const totalTonnage = rows.reduce((sum, record) => sum + record.tonnage, 0);
      $("#briefing-scope").textContent = rows.length
        ? `${rows.length} sevkiyat · ${numberFormat.format(totalTonnage)} MT üzerinden`
        : "Seçili filtrelerde kayıt yok";
      if (!rows.length) {
        root.innerHTML = '<div class="empty">Yönetici özeti için eşleşen kayıt bulunamadı.</div>';
        return;
      }

      const topOrigin = aggregateOrigins(rows)[0];
      const commodityMap = new Map();
      rows.forEach((record) => {
        const item = commodityMap.get(record.commodity) || {
          tonnage: 0,
          scoreTotal: 0,
          scoreCount: 0,
          count: 0,
        };
        item.tonnage += record.tonnage;
        item.count += 1;
        if (typeof record.emtiaScore === "number") {
          item.scoreTotal += record.emtiaScore;
          item.scoreCount += 1;
        }
        commodityMap.set(record.commodity, item);
      });
      const commodityStats = [...commodityMap.entries()].map(([name, item]) => ({
        name,
        ...item,
        averageScore: item.scoreCount ? item.scoreTotal / item.scoreCount : null,
      }));
      const topCommodity = commodityStats.slice().sort((a, b) => b.tonnage - a.tonnage)[0];
      const topScore = commodityStats
        .filter((item) => item.averageScore != null)
        .sort((a, b) => b.averageScore - a.averageScore)[0];
      const largest = rows.slice().sort((a, b) => b.tonnage - a.tonnage)[0];

      const cards = [
        {
          icon: "origin",
          label: "Lider menşe",
          value: topOrigin?.name || "—",
          detail: topOrigin
            ? `${numberFormat.format(topOrigin.tonnage)} MT · hacmin %${numberFormat.format((topOrigin.tonnage / totalTonnage) * 100)}’i`
            : "Eşleştirilebilir menşe yok",
        },
        {
          icon: "commodity",
          label: "En yüksek hacim",
          value: topCommodity?.name || "—",
          detail: topCommodity
            ? `${numberFormat.format(topCommodity.tonnage)} MT · ${topCommodity.count} sevkiyat`
            : "Emtia verisi yok",
        },
        {
          icon: "score",
          label: "En yüksek ortalama skor",
          value: topScore?.name || "—",
          detail: topScore
            ? `${numberFormat.format(topScore.averageScore)} / 100 · ${topScore.scoreCount} kayıt`
            : "Skorlu kayıt yok",
        },
        {
          icon: "vessel",
          label: "En büyük sevkiyat",
          value: largest?.vessel || "—",
          detail: largest
            ? `${numberFormat.format(largest.tonnage)} MT · ${largest.commodity}`
            : "Sevkiyat verisi yok",
        },
      ];

      root.innerHTML = cards.map((card) => `
        <article class="insight">
          <span class="insight-icon">${insightIcons[card.icon]}</span>
          <span class="insight-label">${escapeHtml(card.label)}</span>
          <strong class="insight-value">${escapeHtml(card.value)}</strong>
          <span class="insight-detail">${escapeHtml(card.detail)}</span>
        </article>
      `).join("");
    };

    const renderTonnageChart = (rows) => {
      const root = $("#tonnage-chart");
      const commodities = [...new Set(rows.map((record) => record.commodity))].sort((a, b) => a.localeCompare(b, "tr"));
      const years = [...new Set(rows.map((record) => record.year))].sort();
      const allYears = [...new Set(DATA.map((record) => record.year))].sort();
      const yearPalette = [
        "var(--teal)",
        "var(--orange)",
        "var(--blue)",
        "var(--green)",
        "var(--red)",
        "#8b6fb0",
      ];
      const yearColors = new Map(
        allYears.map((year, index) => [year, yearPalette[index % yearPalette.length]])
      );
      $("#year-legend").innerHTML = years.map((year) =>
        `<span class="legend-item"><span class="swatch" style="background:${yearColors.get(year)}"></span>${year}</span>`
      ).join("");

      if (!rows.length || !commodities.length) {
        root.innerHTML = '<div class="empty">Seçili filtrelerde grafik oluşturacak kayıt yok.</div>';
        return;
      }

      const grouped = new Map();
      rows.forEach((record) => {
        const key = `${record.commodity}|${record.year}`;
        grouped.set(key, (grouped.get(key) || 0) + record.tonnage);
      });

      const max = Math.max(...grouped.values(), 1);
      const width = 760;
      const left = 168;
      const right = 74;
      const top = 42;
      const rowHeight = Math.max(46, years.length * 21 + 16);
      const height = top + commodities.length * rowHeight + 42;
      const plotWidth = width - left - right;
      let svg = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="tonnage-title tonnage-desc">
        <title id="tonnage-title">Emtia bazında tonaj grafiği</title>
        <desc id="tonnage-desc">Seçili kayıtlarda her emtia için yıllara göre toplam tonaj.</desc>`;

      for (let tick = 0; tick <= 4; tick++) {
        const x = left + (plotWidth * tick) / 4;
        const value = (max * tick) / 4;
        svg += `<line class="chart-gridline" x1="${x}" x2="${x}" y1="${top - 14}" y2="${height - 30}"></line>`;
        svg += `<text class="chart-axis-label" x="${x}" y="${height - 10}" text-anchor="middle">${escapeHtml(compactFormat.format(value))}</text>`;
      }

      commodities.forEach((commodity, index) => {
        const yBase = top + index * rowHeight;
        const categoryY = yBase + (years.length > 1 ? years.length * 10.5 + 5 : 22);
        svg += `<text class="chart-category" x="${left - 14}" y="${categoryY}" text-anchor="end">${escapeHtml(commodity)}</text>`;
        years.forEach((year, yearIndex) => {
          const value = grouped.get(`${commodity}|${year}`) || 0;
          const barWidth = (value / max) * plotWidth;
          const y = yBase + (years.length > 1 ? yearIndex * 21 : 8);
          const labelX = Math.min(left + barWidth + 7, width - right + 5);
          svg += `<rect style="fill:${yearColors.get(year)}" x="${left}" y="${y}" width="${Math.max(barWidth, value ? 2 : 0)}" height="14" rx="5">
            <title>${year} · ${escapeHtml(commodity)} · ${numberFormat.format(value)} MT</title>
          </rect>`;
          if (value) {
            svg += `<text class="chart-value" x="${labelX}" y="${y + 11}">${escapeHtml(compactFormat.format(value))}</text>`;
          }
        });
      });
      svg += "</svg>";
      root.innerHTML = svg;
    };

    const renderYearScoreRanking = (rows) => {
      const root = $("#year-score-ranking");
      const yearMap = new Map();
      rows
        .filter((record) => typeof record.emtiaScore === "number")
        .forEach((record) => {
          const current = yearMap.get(record.year) || { total: 0, count: 0 };
          current.total += record.emtiaScore;
          current.count += 1;
          yearMap.set(record.year, current);
        });
      const ranking = [...yearMap.entries()]
        .map(([year, item]) => [year, item.total / item.count, item.count])
        .sort((a, b) => a[0] - b[0]);
      if (!ranking.length) {
        root.innerHTML = '<div class="empty">Seçili kayıtlarda Emtia Skoru modeli yok.</div>';
        return;
      }
      root.innerHTML = ranking.map(([year, score, count]) => `
        <div class="rank-row">
          <div class="rank-meta">
            <strong>${year} <small class="text-muted">· ${count} kayıt</small></strong>
            <span>${numberFormat.format(score)} / 100</span>
          </div>
          <div class="track" aria-hidden="true"><span style="width:${Math.max(0, Math.min(100, score))}%"></span></div>
        </div>
      `).join("");
    };

    const renderScoreRanking = (rows) => {
      const root = $("#score-ranking");
      const scoreMap = new Map();
      rows
        .filter((record) => typeof record.emtiaScore === "number")
        .forEach((record) => {
          const current = scoreMap.get(record.commodity) || { total: 0, count: 0 };
          current.total += record.emtiaScore;
          current.count += 1;
          scoreMap.set(record.commodity, current);
        });
      const ranking = [...scoreMap.entries()]
        .map(([commodity, item]) => [commodity, item.total / item.count])
        .sort((a, b) => b[1] - a[1]);
      if (!ranking.length) {
        root.innerHTML = '<div class="empty">Seçili kayıtlarda Emtia Skoru modeli yok.</div>';
        return;
      }
      root.innerHTML = ranking.map(([commodity, score]) => `
        <div class="rank-row">
          <div class="rank-meta">
            <strong>${escapeHtml(commodity)}</strong>
            <span>${numberFormat.format(score)} / 100</span>
          </div>
          <div class="track" aria-hidden="true"><span style="width:${Math.max(0, Math.min(100, score))}%"></span></div>
        </div>
      `).join("");
    };

    const renderTrendChart = (rows) => {
      const root = $("#trend-chart");
      if (!rows.length) {
        root.innerHTML = '<div class="empty">Seçili filtrelerde aylık trend oluşturacak kayıt yok.</div>';
        return;
      }

      const monthKey = (date) => date.slice(0, 7);
      const monthlyMap = new Map();
      rows.forEach((record) => {
        const key = monthKey(record.date);
        const item = monthlyMap.get(key) || {
          tonnage: 0,
          scoreTotal: 0,
          scoreCount: 0,
          records: 0,
        };
        item.tonnage += record.tonnage;
        item.records += 1;
        if (typeof record.emtiaScore === "number") {
          item.scoreTotal += record.emtiaScore;
          item.scoreCount += 1;
        }
        monthlyMap.set(key, item);
      });

      const keys = [...monthlyMap.keys()].sort();
      const start = new Date(`${keys[0]}-01T12:00:00`);
      const end = new Date(`${keys.at(-1)}-01T12:00:00`);
      const months = [];
      for (
        let cursor = new Date(start);
        cursor <= end;
        cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1, 12)
      ) {
        const key = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}`;
        const item = monthlyMap.get(key) || {
          tonnage: 0,
          scoreTotal: 0,
          scoreCount: 0,
          records: 0,
        };
        months.push({
          key,
          date: new Date(cursor),
          ...item,
          score: item.scoreCount ? item.scoreTotal / item.scoreCount : null,
        });
      }

      const width = 1180;
      const height = 350;
      const left = 62;
      const right = 58;
      const top = 30;
      const bottom = 55;
      const plotWidth = width - left - right;
      const plotHeight = height - top - bottom;
      const slot = plotWidth / Math.max(months.length, 1);
      const barWidth = Math.max(4, Math.min(30, slot * 0.58));
      const maxTonnage = Math.max(...months.map((item) => item.tonnage), 1);
      const scoreValues = months.map((item) => item.score).filter((value) => value != null);
      const scoreMin = scoreValues.length
        ? Math.max(0, Math.floor(Math.min(...scoreValues) / 5) * 5 - 5)
        : 0;
      const scoreMax = 100;
      const xFor = (index) => left + slot * index + slot / 2;
      const yTonnage = (value) => top + plotHeight - (value / maxTonnage) * plotHeight;
      const yScore = (value) =>
        top + plotHeight - ((value - scoreMin) / Math.max(1, scoreMax - scoreMin)) * plotHeight;

      let svg = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="trend-svg-title trend-svg-desc">
        <title id="trend-svg-title">Aylık hacim ve Emtia Skoru trendi</title>
        <desc id="trend-svg-desc">Her ayın toplam sevkiyat tonajı sütunlarla, ortalama Emtia Skoru turuncu çizgiyle gösterilir.</desc>`;

      for (let tick = 0; tick <= 4; tick++) {
        const ratio = tick / 4;
        const y = top + plotHeight - ratio * plotHeight;
        const tonnageValue = maxTonnage * ratio;
        const scoreValue = scoreMin + (scoreMax - scoreMin) * ratio;
        svg += `<line class="trend-gridline" x1="${left}" x2="${width - right}" y1="${y}" y2="${y}"></line>
          <text class="trend-label" x="${left - 9}" y="${y + 4}" text-anchor="end">${escapeHtml(compactFormat.format(tonnageValue))}</text>
          <text class="trend-label" x="${width - right + 9}" y="${y + 4}">${numberFormat.format(scoreValue)}</text>`;
      }

      svg += `<text class="trend-label" x="${left}" y="14">Tonaj (MT)</text>
        <text class="trend-label" x="${width - right}" y="14" text-anchor="end">Skor / 100</text>`;

      months.forEach((item, index) => {
        const x = xFor(index);
        const y = yTonnage(item.tonnage);
        const labelMonth = new Intl.DateTimeFormat("tr-TR", { month: "short" })
          .format(item.date)
          .replace(".", "");
        const shouldLabel = months.length <= 14 || index % 2 === 0 || item.date.getMonth() === 0;
        svg += `<rect class="trend-bar" x="${x - barWidth / 2}" y="${y}" width="${barWidth}" height="${Math.max(0, top + plotHeight - y)}" rx="4">
          <title>${escapeHtml(labelMonth)} ${item.date.getFullYear()} · ${numberFormat.format(item.tonnage)} MT · ${item.records} sevkiyat</title>
        </rect>`;
        if (shouldLabel) {
          svg += `<text class="trend-label" x="${x}" y="${height - 29}" text-anchor="middle">${escapeHtml(labelMonth)}</text>`;
          if (item.date.getMonth() === 0 || index === 0) {
            svg += `<text class="trend-value" x="${x}" y="${height - 13}" text-anchor="middle">${item.date.getFullYear()}</text>`;
          }
        }
      });

      const scorePoints = months
        .map((item, index) => item.score == null ? null : [xFor(index), yScore(item.score), item])
        .filter(Boolean);
      if (scorePoints.length) {
        svg += `<path class="trend-line" d="${scorePoints.map(([x, y], index) => `${index ? "L" : "M"}${x},${y}`).join(" ")}"></path>`;
        scorePoints.forEach(([x, y, item]) => {
          svg += `<circle class="trend-dot" cx="${x}" cy="${y}" r="4">
            <title>${escapeHtml(formatPeriod(`${item.key}-01`))} · Ortalama skor ${numberFormat.format(item.score)} · ${item.scoreCount} kayıt</title>
          </circle>`;
        });
      }
      svg += "</svg>";
      root.innerHTML = svg;
    };

    const renderTable = (rows) => {
      $("#table-subtitle").textContent = `${rows.length} sevkiyat · ${numberFormat.format(rows.reduce((sum, row) => sum + row.tonnage, 0))} MT`;
      $("#table-count").textContent = `${rows.length} kayıt gösteriliyor`;
      $("#user-record-count").textContent = `${userRecords.length} kullanıcı kaydı`;
      const sortLabels = {
        "date-desc": "Tarih: yeni → eski",
        "tonnage-desc": "Tonaj: yüksek → düşük",
        "score-desc": "Emtia Skoru: yüksek → düşük",
        "commodity-asc": "Emtia: A → Z",
      };
      $("#table-sort-label").textContent = sortLabels[elements.sort.value] || sortLabels["date-desc"];
      if (!rows.length) {
        elements.rows.innerHTML = '<tr class="table-empty"><td colspan="7">Filtrelerle eşleşen sevkiyat bulunamadı.</td></tr>';
        return;
      }
      elements.rows.innerHTML = rows.map((record) => `
        <tr class="${record.userCreated ? "user-record-row" : ""}">
          <td>${escapeHtml(formatPeriod(record.date))}</td>
          <td>${escapeHtml(record.commodity)}</td>
          <td class="vessel">
            ${escapeHtml(record.vessel)}
            ${record.firm ? `<span class="subline">${escapeHtml(record.firm)}</span>` : ""}
            ${record.appearance ? `<span class="subline">Görünüm: ${escapeHtml(record.appearance)}</span>` : ""}
            ${record.userCreated ? '<span class="user-badge">Kullanıcı kaydı</span>' : ""}
          </td>
          <td>${escapeHtml(record.country)}</td>
          <td class="numeric">${numberFormat.format(record.tonnage)}</td>
          <td class="numeric">${typeof record.emtiaScore === "number" ? `
            <span class="score-cell">
              <strong>${numberFormat.format(record.emtiaScore)}</strong>
              <span class="score-mini" aria-hidden="true"><span style="width:${Math.max(0, Math.min(100, record.emtiaScore))}%"></span></span>
            </span>` : "—"}</td>
          <td><button class="button detail-button" type="button" data-record-id="${record.id}"
            aria-label="${escapeHtml(record.vessel)} kaydını incele">İncele</button></td>
        </tr>
      `).join("");
    };

    const renderScope = (rows) => {
      const labels = [];
      if (elements.year.value) labels.push(elements.year.value);
      if (elements.commodity.value) labels.push(elements.commodity.value);
      if (selectedCountries.size) {
        const countries = [...selectedCountries].sort((a, b) => a.localeCompare(b, "tr"));
        labels.push(countries.length <= 3 ? countries.join(", ") : `${countries.length} ülke`);
      }
      if (elements.search.value.trim()) labels.push(`“${elements.search.value.trim()}”`);
      $("#active-scope").textContent = labels.length ? labels.join(" · ") : "Tüm kayıtlar";
    };

    const renderDataStatus = () => {
      if (DATA.length) {
        const dates = DATA.map((record) => record.date).sort();
        const years = [...new Set(DATA.map((record) => record.year))].sort((a, b) => a - b);
        const consecutiveYears = years.every(
          (year, index) => index === 0 || year === years[index - 1] + 1
        );
        const yearLabel = years.length === 1
          ? String(years[0])
          : consecutiveYears
            ? `${years[0]}–${years.at(-1)}`
            : years.join(" · ");
        $("#data-period").textContent = `${formatPeriod(dates[0])} – ${formatPeriod(dates.at(-1))}`;
        $("#report-year-range").textContent = yearLabel;
        $("#report-period-copy").textContent = `${yearLabel} dönemindeki`;
        document.title = `İthal Emtia Gemi ve Kalite Raporu · ${yearLabel}`;
      }
      $("#source-count").textContent = userRecords.length
        ? `${REPORT_META.sourceFiles?.length || 2} Excel · ${BASE_DATA.length} kaynak kayıt + ${userRecords.length} kullanıcı kaydı`
        : `${REPORT_META.sourceFiles?.length || 2} Excel kaynağı · ${BASE_DATA.length} kayıt`;
    };

    const render = () => {
      const rows = currentRows();
      renderDataStatus();
      renderKpis(rows);
      renderInsights(rows);
      renderOriginMap(rows);
      renderTonnageChart(rows);
      renderYearScoreRanking(rows);
      renderScoreRanking(rows);
      renderTrendChart(rows);
      renderTable(rows);
      renderScope(rows);
      return rows;
    };

    const openDetail = (record) => {
      $("#detail-title").textContent = record.vessel;
      $("#detail-subtitle").textContent = `${formatPeriod(record.date)} · ${record.commodity}`;
      $("#detail-summary").innerHTML = [
        ["Ülke", record.country],
        ["Firma", record.firm || "—"],
        ["Tonaj", `${numberFormat.format(record.tonnage)} MT`],
        ["Görünüm / açıklama", record.appearance || "—"],
        ["Emtia Skoru", typeof record.emtiaScore === "number" ? numberFormat.format(record.emtiaScore) : "—"],
        ["Skor modeli", record.scoreModel || "—"],
        ["Kaynak", record.userCreated ? "Kullanıcı girişi" : "Excel kaynakları"],
      ].map(([label, value]) => `<div><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></div>`).join("");

      const cards = metricCatalog
        .filter(([key]) => record.metrics[key] != null)
        .map(([key, label, unit]) => {
          const scorePart = record.scoreBreakdown.find((item) => item.key === key);
          const scoreContribution = scorePart
            ? scorePart.weight > 0
              ? `Skor katkısı: ${numberFormat.format(scorePart.contribution)} / ${numberFormat.format(scorePart.weight)} · Skor limiti ${scorePart.op === "max" ? "≤" : "≥"} ${numberFormat.format(scorePart.limit)}${unit ? ` ${unit}` : ""}`
              : "Ağırlık %0 · kalite kaydında izlenir, Emtia Skoruna dahil değildir"
            : "";
          return `
            <div class="metric">
              <div class="metric-top">
                <span class="metric-label">${escapeHtml(label)}</span>
                ${scorePart ? `<span class="metric-weight">Ağırlık ${numberFormat.format(scorePart.weight)}</span>` : ""}
              </div>
              <div class="metric-value">${formatMetric(record.metrics[key], unit)}</div>
              ${scoreContribution ? `<div class="metric-limit">${escapeHtml(scoreContribution)}</div>` : ""}
            </div>`;
        });
      $("#detail-metrics").innerHTML = cards.length
        ? cards.join("")
        : '<div class="empty">Bu kayıt için ölçüm verisi bulunmuyor.</div>';
      const detailActions = $("#detail-record-actions");
      detailActions.dataset.recordId = String(record.id);
      detailActions.innerHTML = record.userCreated
        ? `<button class="button" type="button" data-edit-user-record>Düzenle</button>
           <button class="button button-danger" type="button" data-delete-user-record>Kaydı sil</button>`
        : "";
      elements.dialog.showModal();
    };

    const csvCell = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
    const csvValue = (value) => {
      if (typeof value === "number" && Number.isFinite(value)) {
        return String(value).replace(".", ",");
      }
      if (typeof value === "string" && /^[\t\r\n ]*[=+\-@]/.test(value)) {
        return `'${value}`;
      }
      return value;
    };
    const downloadCsv = () => {
      const rows = currentRows();
      const headers = ["Dönem", "Yıl", "Emtia", "Gemi", "Firma", "Ülke", "Tonaj (MT)", "Emtia Skoru", "Görünüm / Açıklama", ...metricCatalog.map(([, label, unit]) => `${label}${unit ? ` (${unit})` : ""}`)];
      const lines = [
        headers.map(csvCell).join(";"),
        ...rows.map((record) => [
          record.date,
          record.year,
          record.commodity,
          record.vessel,
          record.firm,
          record.country,
          record.tonnage,
          record.emtiaScore ?? "",
          record.appearance || "",
          ...metricCatalog.map(([key]) => record.metrics[key] ?? ""),
        ].map(csvValue).map(csvCell).join(";")),
      ];
      const blob = new Blob(["\uFEFF", lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "gemiler-kalite-filtreli.csv";
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    };

    const commodityQualitySchemas = {
      "Ham Ayçiçek Yağı": [
        { key: "ffa", label: "FFA", unit: "%" },
        { key: "sediment", label: "Tortu", unit: "%" },
        { key: "moisture", label: "Rutubet / Nem", unit: "%" },
        { key: "wax", label: "Wax", unit: "ppm" },
        { key: "phosphorus", label: "Fosfor", unit: "ppm" },
        { key: "benzo", label: "Benzo(a)piren", unit: "ppb", valueType: "text" },
      ],
      "Ayçiçek Tohumu": [
        { key: "ffa", label: "FFA", unit: "%" },
        { key: "oil", label: "Yağ", unit: "%" },
        { key: "moisture", label: "Rutubet / Nem", unit: "%" },
        { key: "impurity", label: "Empürite", unit: "%" },
        { key: "protein", label: "Protein (N:6,25)", unit: "%" },
      ],
      "Mısırözü": [
        { key: "ffa", label: "FFA", unit: "%" },
        { key: "oil", label: "Yağ", unit: "%" },
        { key: "moisture", label: "Rutubet / Nem", unit: "%" },
        { key: "dust", label: "Toz", unit: "%" },
        { key: "hectoliter", label: "Hektolitre", unit: "" },
        { key: "core", label: "Öz miktarı", unit: "%" },
        { key: "bran", label: "Kepek", unit: "%" },
        { key: "impurity", label: "Empürite", unit: "%" },
        { key: "protein", label: "Protein (N:6,25)", unit: "%" },
        { key: "starch", label: "Nişasta", unit: "%" },
      ],
      "Soya Tohumu": [
        { key: "ffa", label: "FFA", unit: "%" },
        { key: "oil", label: "Yağ", unit: "%" },
        { key: "moisture", label: "Rutubet / Nem", unit: "%" },
        { key: "impurity", label: "Empürite", unit: "%" },
        { key: "protein", label: "Protein (N:6,25)", unit: "%" },
      ],
    };

    let toastTimer = null;
    let editingRecordId = null;
    let recordFormInitialState = "";

    const showToast = (message) => {
      elements.toast.textContent = message;
      elements.toast.classList.add("is-visible");
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => {
        elements.toast.classList.remove("is-visible");
      }, 3200);
    };

    const persistUserRecords = () => {
      try {
        window.localStorage?.setItem(USER_RECORDS_KEY, JSON.stringify(userRecords));
        storageState.available = true;
        return true;
      } catch {
        storageState.available = false;
        return false;
      }
    };

    const syncDataFromUserRecords = () => {
      DATA.length = 0;
      DATA.push(...BASE_DATA, ...userRecords);
    };

    const recordFormSnapshot = () => JSON.stringify(
      [...elements.recordForm.querySelectorAll("input, select")].map((control) => [
        control.id || control.dataset.metric || "",
        control.type === "checkbox" ? control.checked : control.value,
      ])
    );

    const closeRecordFormSafely = () => {
      const dirty = elements.recordDialog.open &&
        recordFormInitialState &&
        recordFormSnapshot() !== recordFormInitialState;
      if (dirty && !window.confirm("Kaydedilmemiş değişiklikler var. Form kapatılsın mı?")) {
        return false;
      }
      elements.recordDialog.close();
      return true;
    };

    const numericInputValue = (input) => {
      if (!input || input.value === "") return null;
      const value = Number(String(input.value).replace(",", "."));
      return Number.isFinite(value) ? value : null;
    };

    const recordDraftFromForm = () => {
      const metrics = {};
      elements.recordMetrics.querySelectorAll("[data-metric]").forEach((input) => {
        if (input.dataset.valueType === "text") {
          const raw = input.value.trim();
          if (raw) {
            const numeric = Number(raw.replace(",", "."));
            metrics[input.dataset.metric] = Number.isFinite(numeric)
              ? numeric
              : /^TED$/i.test(raw)
                ? "TED"
                : raw;
          }
          return;
        }
        const value = numericInputValue(input);
        if (value != null) metrics[input.dataset.metric] = value;
      });
      const longitude = numericInputValue(elements.recordLongitude);
      const latitude = numericInputValue(elements.recordLatitude);
      const date = elements.recordDate.value;
      const draft = {
        date,
        year: Number(date?.slice(0, 4)),
        sourceYear: Number(date?.slice(0, 4)),
        commodity: elements.recordCommodity.value,
        vessel: elements.recordVessel.value.trim(),
        firm: elements.recordFirm.value.trim(),
        country: elements.recordCountry.value.trim(),
        tonnage: numericInputValue(elements.recordTonnage),
        appearance: elements.recordAppearance.value.trim(),
        metrics,
        userCreated: true,
      };
      if (longitude != null && latitude != null) {
        draft.originLongitude = longitude;
        draft.originLatitude = latitude;
      }
      const scoreResult = calculateCommodityScore(draft);
      draft.emtiaScore = scoreResult.score;
      draft.scoreBreakdown = scoreResult.breakdown;
      draft.scoreModel = scoreResult.model;
      return draft;
    };

    const updateRecordScorePreview = () => {
      const draft = recordDraftFromForm();
      const model = scoreModelForRecord(draft);
      const requiredParameters = model.parameters.filter(({ weight }) => weight > 0);
      const completed = requiredParameters.filter(({ key }) =>
        typeof draft.metrics[key] === "number"
      ).length;
      if (typeof draft.emtiaScore !== "number") {
        elements.recordScorePreview.innerHTML = `
          <div>
            <span>Tahmini Emtia Skoru</span>
            <strong>—</strong>
          </div>
          <p>${requiredParameters.length} zorunlu parametrenin ${completed} tanesi dolduruldu. Skor için tüm zorunlu değerleri girin.</p>`;
        return;
      }
      const mainContributions = draft.scoreBreakdown
        .slice()
        .filter((item) => item.weight > 0)
        .sort((a, b) => b.weight - a.weight)
        .map((item) => `${item.label}: ${numberFormat.format(item.contribution)} / ${item.weight}`)
        .join(" · ");
      elements.recordScorePreview.innerHTML = `
        <div>
          <span>Tahmini Emtia Skoru</span>
          <strong>${numberFormat.format(draft.emtiaScore)}</strong>
        </div>
        <p>${escapeHtml(draft.scoreModel)} · ${escapeHtml(mainContributions)}</p>`;
    };

    const renderRecordMetricFields = (values = {}) => {
      const model = scoreModelForRecord({
        commodity: elements.recordCommodity.value,
        country: elements.recordCountry.value,
      }).parameters;
      const modelByKey = new Map(model.map((item) => [item.key, item]));
      const schema = commodityQualitySchemas[elements.recordCommodity.value] || [];
      const fields = schema.map((schemaField) => {
        const scoreField = modelByKey.get(schemaField.key);
        return {
          ...schemaField,
          ...(scoreField || {}),
          label: schemaField.label,
          unit: schemaField.unit,
          required: Boolean(scoreField && scoreField.weight > 0),
          isScore: Boolean(scoreField && scoreField.weight > 0),
          isZeroWeight: Boolean(scoreField && scoreField.weight === 0),
        };
      });

      elements.recordQualityPreset.innerHTML = fields.map((field) => `
        <span class="quality-chip ${field.isScore ? "is-score" : ""}">
          <i aria-hidden="true"></i>
          ${escapeHtml(field.label)}
          ${field.isScore ? `· %${field.weight}` : field.isZeroWeight ? "· %0 · izleme" : "· ek alan"}
        </span>
      `).join("");

      elements.recordMetrics.innerHTML = fields.map((field) => {
        const reference = field.required
          ? `Ağırlık ${field.weight} · Referans ${field.op === "max" ? "≤" : "≥"} ${numberFormat.format(field.limit)}${field.unit ? ` ${field.unit}` : ""}`
          : "Excel kalite kolonu · Emtia Skoruna dahil değil";
        const currentValue = values[field.key] ?? "";
        const isText = field.valueType === "text";
        return `
          <label class="form-field">
            <span class="metric-field-head">
              <span>${escapeHtml(field.label)}${field.unit ? ` (${escapeHtml(field.unit)})` : ""}${field.required ? " *" : ""}</span>
              ${field.isScore ? "<em>Skor parametresi</em>" : field.isZeroWeight ? "<em>Skor dışı izleme</em>" : "<em>Ek kalite</em>"}
            </span>
            <input class="control" type="${isText ? "text" : "number"}"
              ${isText ? 'inputmode="decimal" placeholder="Sayı veya TED"' : 'min="0" step="any"'}
              data-metric="${escapeHtml(field.key)}" data-value-type="${isText ? "text" : "number"}"
              value="${escapeHtml(currentValue)}" ${field.required ? "required" : ""}>
            <small>${escapeHtml(reference)}</small>
          </label>`;
      }).join("");
      updateRecordScorePreview();
    };

    const openRecordForm = (record = null) => {
      editingRecordId = record?.userCreated ? record.id : null;
      elements.recordForm.reset();
      const today = new Date();
      const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10);
      elements.recordDate.value = record?.date || localToday;
      elements.recordCommodity.value = record?.commodity || "Soya Tohumu";
      elements.recordVessel.value = record?.vessel || "";
      elements.recordFirm.value = record?.firm || "";
      elements.recordCountry.value = record?.country || "";
      elements.recordTonnage.value = record?.tonnage ?? "";
      elements.recordAppearance.value = record?.appearance || "";
      elements.recordLongitude.value = record?.originLongitude ?? "";
      elements.recordLatitude.value = record?.originLatitude ?? "";
      renderRecordMetricFields(record?.metrics || {});
      $("#record-dialog-title").textContent = record ? "Gemi kaydını düzenle" : "Yeni gemi kaydı";
      elements.recordForm.querySelector('button[type="submit"]').textContent = record
        ? "Değişiklikleri kaydet"
        : "Kaydı ekle";
      elements.recordDialog.showModal();
      recordFormInitialState = recordFormSnapshot();
      elements.recordVessel.focus();
    };

    const resetActiveFilters = () => {
      elements.search.value = "";
      elements.year.value = "";
      elements.commodity.value = "";
      selectedCountries.clear();
      refreshCountryFilterOptions();
      elements.sort.value = "date-desc";
    };

    const saveRecordFromForm = () => {
      const draft = recordDraftFromForm();
      const hasInvalidMetric = Object.values(draft.metrics).some((value) =>
        typeof value === "number" && (!Number.isFinite(value) || value < 0)
      );
      const hasInvalidTextMetric = Object.entries(draft.metrics).some(
        ([key, value]) =>
          typeof value === "string" &&
          !(key === "benzo" && value === "TED")
      );
      if (hasInvalidTextMetric) {
        showToast("Benzo(a)piren alanına yalnız sayısal değer veya TED girilebilir.");
        return false;
      }
      if (
        !isValidIsoDate(draft.date) ||
        !SUPPORTED_COMMODITIES.has(draft.commodity) ||
        !draft.vessel ||
        !draft.country ||
        !Number.isFinite(draft.tonnage) ||
        draft.tonnage <= 0 ||
        hasInvalidMetric
      ) {
        showToast("Tarih, gemi, menşe ülke, tonaj ve kalite değerlerini kontrol edin.");
        return false;
      }
      const hasLongitude = String(elements.recordLongitude.value).trim() !== "";
      const hasLatitude = String(elements.recordLatitude.value).trim() !== "";
      if (hasLongitude !== hasLatitude) {
        showToast("Harita koordinatı için enlem ve boylamı birlikte girin.");
        return false;
      }
      if (
        hasLongitude &&
        (
          !Number.isFinite(draft.originLongitude) ||
          !Number.isFinite(draft.originLatitude) ||
          draft.originLongitude < -180 ||
          draft.originLongitude > 180 ||
          draft.originLatitude < -60 ||
          draft.originLatitude > 85
        )
      ) {
        showToast("Koordinatları kontrol edin: boylam −180–180, enlem −60–85 olmalıdır.");
        return false;
      }
      if (!Number.isFinite(draft.emtiaScore)) {
        showToast("Emtia Skoru için zorunlu kalite parametrelerini tamamlayın.");
        return false;
      }
      if (editingRecordId != null) {
        const index = userRecords.findIndex((record) => record.id === editingRecordId);
        if (index >= 0) userRecords[index] = { ...draft, id: editingRecordId };
      } else {
        let id = Date.now();
        while (DATA.some((record) => record.id === id)) id += 1;
        userRecords.push({ ...draft, id });
      }
      persistUserRecords();
      syncDataFromUserRecords();
      refreshFilterOptions();
      resetActiveFilters();
      resetMapView();
      render();
      recordFormInitialState = recordFormSnapshot();
      elements.recordDialog.close();
      showToast(
        storageState.available
          ? editingRecordId != null
            ? "Gemi kaydı güncellendi."
            : "Yeni gemi kaydı eklendi ve bu tarayıcıya kaydedildi."
          : "Kayıt bu oturumda eklendi; tarayıcı kalıcı depolamaya izin vermedi."
      );
      editingRecordId = null;
      return true;
    };

    const deleteUserRecord = (recordId) => {
      const record = userRecords.find((item) => item.id === recordId);
      if (!record) return;
      if (!window.confirm(`“${record.vessel}” kaydını silmek istediğinize emin misiniz?`)) return;
      userRecords = userRecords.filter((item) => item.id !== recordId);
      persistUserRecords();
      syncDataFromUserRecords();
      refreshFilterOptions();
      elements.dialog.close();
      resetMapView();
      render();
      showToast("Kullanıcı kaydı silindi.");
    };

    const exportUserRecords = () => {
      const payload = {
        schema: "gemiler-user-records-v1",
        exportedAt: new Date().toISOString(),
        records: userRecords,
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: "application/json;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `gemiler-kullanici-kayitlari-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      showToast(`${userRecords.length} kullanıcı kaydı yedeklendi.`);
    };

    const normalizeImportedRecord = (record, index) => {
      if (!record || typeof record !== "object" || Array.isArray(record)) return null;
      const normalized = normalizeUserRecordShape(
        { ...record, userCreated: true },
        index,
        { allowGeneratedId: true }
      );
      if (!normalized) return null;
      const scoreResult = calculateCommodityScore(normalized);
      normalized.emtiaScore = scoreResult.score;
      normalized.scoreBreakdown = scoreResult.breakdown;
      normalized.scoreModel = scoreResult.model;
      return Number.isFinite(normalized.emtiaScore) ? normalized : null;
    };

    const importUserRecords = async (file) => {
      try {
        const parsed = JSON.parse(await file.text());
        const sourceRecords = Array.isArray(parsed)
          ? parsed
          : Array.isArray(parsed?.records)
            ? parsed.records
            : [];
        const incoming = sourceRecords
          .map(normalizeImportedRecord)
          .filter(Boolean);
        if (!incoming.length) throw new Error("Geçerli kullanıcı kaydı bulunamadı");
        const merged = new Map(userRecords.map((record) => [record.id, record]));
        let addedCount = 0;
        let updatedCount = 0;
        incoming.forEach((record, index) => {
          let id = record.id;
          if (BASE_DATA.some((base) => base.id === id)) {
            id = Date.now() + index;
            while (BASE_DATA.some((base) => base.id === id) || merged.has(id)) id += 1;
          }
          if (merged.has(id)) updatedCount += 1;
          else addedCount += 1;
          merged.set(id, { ...record, id });
        });
        userRecords = [...merged.values()];
        persistUserRecords();
        syncDataFromUserRecords();
        refreshFilterOptions();
        resetActiveFilters();
        resetMapView();
        render();
        const rejectedCount = sourceRecords.length - incoming.length;
        showToast(
          `${addedCount} kayıt eklendi · ${updatedCount} kayıt güncellendi` +
          (rejectedCount ? ` · ${rejectedCount} geçersiz kayıt atlandı` : "")
        );
      } catch (error) {
        showToast(`Yedek yüklenemedi: ${error.message}`);
      } finally {
        elements.importUserData.value = "";
      }
    };

    [elements.year, elements.commodity].forEach((control) =>
      control.addEventListener("change", () => {
        resetMapView();
        render();
      })
    );
    elements.sort.addEventListener("change", render);
    elements.search.addEventListener("input", () => {
      resetMapView();
      render();
    });

    const setCountryMenuOpen = (open) => {
      elements.countryMenu.hidden = !open;
      elements.countryButton.setAttribute("aria-expanded", String(open));
      elements.countryRoot.classList.toggle("is-open", open);
    };
    elements.countryButton.addEventListener("click", () => {
      setCountryMenuOpen(elements.countryMenu.hidden);
    });
    elements.countryOptions.addEventListener("change", (event) => {
      const checkbox = event.target.closest('input[data-country]');
      if (!checkbox) return;
      if (checkbox.checked) selectedCountries.add(checkbox.dataset.country);
      else selectedCountries.delete(checkbox.dataset.country);
      updateCountryFilterUI();
      resetMapView();
      render();
    });
    $("#country-select-all").addEventListener("click", () => {
      selectedCountries.clear();
      availableCountries.forEach((country) => selectedCountries.add(country));
      refreshCountryFilterOptions();
      resetMapView();
      render();
    });
    $("#country-clear").addEventListener("click", () => {
      selectedCountries.clear();
      refreshCountryFilterOptions();
      resetMapView();
      render();
    });
    document.addEventListener("click", (event) => {
      if (!elements.countryRoot.contains(event.target)) setCountryMenuOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !elements.countryMenu.hidden) {
        setCountryMenuOpen(false);
        elements.countryButton.focus();
      }
    });

    elements.reset.addEventListener("click", () => {
      resetActiveFilters();
      resetMapView();
      render();
      elements.search.focus();
    });

    elements.rows.addEventListener("click", (event) => {
      const button = event.target.closest("[data-record-id]");
      if (!button) return;
      const record = DATA.find((item) => item.id === Number(button.dataset.recordId));
      if (record) openDetail(record);
    });

    $("#close-dialog").addEventListener("click", () => elements.dialog.close());
    elements.dialog.addEventListener("click", (event) => {
      const rect = elements.dialog.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) elements.dialog.close();
    });

    $("#detail-record-actions").addEventListener("click", (event) => {
      const recordId = Number(event.currentTarget.dataset.recordId);
      if (event.target.closest("[data-edit-user-record]")) {
        const record = userRecords.find((item) => item.id === recordId);
        if (record) {
          elements.dialog.close();
          openRecordForm(record);
        }
      }
      if (event.target.closest("[data-delete-user-record]")) {
        deleteUserRecord(recordId);
      }
    });

    [$("#open-record-dialog"), $("#open-record-dialog-table")].forEach((button) =>
      button.addEventListener("click", () => openRecordForm())
    );
    $("#close-record-dialog").addEventListener("click", closeRecordFormSafely);
    $("#cancel-record").addEventListener("click", closeRecordFormSafely);
    elements.recordDialog.addEventListener("click", (event) => {
      const rect = elements.recordDialog.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right &&
        event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) closeRecordFormSafely();
    });
    elements.recordDialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeRecordFormSafely();
    });
    elements.recordCommodity.addEventListener("change", () => renderRecordMetricFields());
    elements.recordCountry.addEventListener("input", () => {
      const currentMetrics = recordDraftFromForm().metrics;
      renderRecordMetricFields(currentMetrics);
    });
    elements.recordMetrics.addEventListener("input", updateRecordScorePreview);
    elements.recordForm.addEventListener("submit", (event) => {
      event.preventDefault();
      saveRecordFromForm();
    });

    $("#export-user-data").addEventListener("click", exportUserRecords);
    elements.importUserData.addEventListener("change", () => {
      const file = elements.importUserData.files?.[0];
      if (file) importUserRecords(file);
    });

    $("#map-zoom-in").addEventListener("click", () => setMapZoom(mapView.scale * 1.35));
    $("#map-zoom-out").addEventListener("click", () => setMapZoom(mapView.scale / 1.35));
    $("#map-zoom-reset").addEventListener("click", resetMapView);
    elements.mapSvg.addEventListener("wheel", (event) => {
      event.preventDefault();
      const anchor = clientToMapPoint(event.clientX, event.clientY);
      setMapZoom(
        mapView.scale * (event.deltaY < 0 ? 1.18 : 1 / 1.18),
        anchor.x,
        anchor.y
      );
    }, { passive: false });
    elements.mapSvg.addEventListener("dblclick", (event) => {
      event.preventDefault();
      const anchor = clientToMapPoint(event.clientX, event.clientY);
      setMapZoom(mapView.scale * 1.45, anchor.x, anchor.y);
    });
    elements.mapSvg.addEventListener("pointerdown", (event) => {
      if (mapView.scale <= 1 || event.button !== 0) return;
      mapView.dragging = true;
      mapView.pointerId = event.pointerId;
      const point = clientToMapPoint(event.clientX, event.clientY);
      mapView.lastMapX = point.x;
      mapView.lastMapY = point.y;
      elements.mapSvg.setPointerCapture?.(event.pointerId);
      $("#origin-map").classList.add("is-dragging");
    });
    elements.mapSvg.addEventListener("pointermove", (event) => {
      if (!mapView.dragging || event.pointerId !== mapView.pointerId) return;
      const point = clientToMapPoint(event.clientX, event.clientY);
      const dx = point.x - mapView.lastMapX;
      const dy = point.y - mapView.lastMapY;
      mapView.panX += dx;
      mapView.panY += dy;
      mapView.lastMapX = point.x;
      mapView.lastMapY = point.y;
      applyMapTransform();
    });
    const stopMapDrag = (event) => {
      if (!mapView.dragging) return;
      if (event?.pointerId != null && event.pointerId !== mapView.pointerId) return;
      mapView.dragging = false;
      mapView.pointerId = null;
      $("#origin-map").classList.remove("is-dragging");
    };
    elements.mapSvg.addEventListener("pointerup", stopMapDrag);
    elements.mapSvg.addEventListener("pointercancel", stopMapDrag);
    elements.mapSvg.addEventListener("pointerleave", stopMapDrag);
    elements.mapSvg.addEventListener("keydown", (event) => {
      if (event.key === "Home") {
        event.preventDefault();
        resetMapView();
        return;
      }
      if (mapView.scale <= 1 || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
        return;
      }
      event.preventDefault();
      const step = event.shiftKey ? 72 : 36;
      if (event.key === "ArrowLeft") mapView.panX += step;
      if (event.key === "ArrowRight") mapView.panX -= step;
      if (event.key === "ArrowUp") mapView.panY += step;
      if (event.key === "ArrowDown") mapView.panY -= step;
      applyMapTransform();
    });
    window.addEventListener?.("resize", syncMapOverlayPresentation);

    $("#download-csv").addEventListener("click", downloadCsv);
    $("#print-report").addEventListener("click", () => window.print());

    const applyTheme = (theme) => {
      const isDark = theme === "dark";
      document.documentElement.dataset.theme = isDark ? "dark" : "light";
      elements.theme.setAttribute("aria-pressed", String(isDark));
      elements.theme.setAttribute("aria-label", isDark ? "Açık temayı aç" : "Koyu temayı aç");
    };
    let savedTheme = null;
    try {
      savedTheme = window.localStorage?.getItem("gemiler-dashboard-theme") || null;
    } catch {}
    const prefersDark = typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(savedTheme || (prefersDark ? "dark" : "light"));
    elements.theme.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      try {
        window.localStorage?.setItem("gemiler-dashboard-theme", nextTheme);
      } catch {}
    });

    applyMapTransform();

    if (REPORT_META.generatedAt) {
      const generatedAt = new Date(REPORT_META.generatedAt);
      if (!Number.isNaN(generatedAt.getTime())) {
        $("#generated-date").textContent = `Güncelleme · ${new Intl.DateTimeFormat("tr-TR", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }).format(generatedAt)}`;
      }
    }
    render();
