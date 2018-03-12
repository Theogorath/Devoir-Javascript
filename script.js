var mapButton = document.getElementById('map'),
    filterButton = document.getElementById('filter'),
    reduceButton = document.getElementById('reduce');
var arrayMap = [2,4,6,8,10];
var arrayFilter = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

mapButton.onclick = function () {
    var mapResult = arrayMap.map(x => x * 2);
    alert('Condition : multiplier par 2     valeur initiale : ' + arrayMap + ' valeur finale : ' + mapResult);
};

filterButton.onclick = function () {
    var filterResult = arrayFilter.filter(word => word.length > 6);
    alert('Condition : plus de 6 lettre     valeur initiale : ' + arrayFilter + '   valeur finale : ' + filterResult);
};

