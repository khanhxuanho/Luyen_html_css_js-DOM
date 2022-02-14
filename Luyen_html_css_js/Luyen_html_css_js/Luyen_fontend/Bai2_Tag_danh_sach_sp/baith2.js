
function changeProductList(type, element)/*ben the co this lay chinh no*/
{
    /*dua tham so de biet chon cai nao biet click ao cai nao*/
    let tabs = document.getElementsByClassName('tab-item');

    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.background = '#b14c38';//ve mau ban dau
    }
    element.style.background = '#ee4d2d';

    document.getElementById(type).style.display = 'block';//an di
    //viet de an vo tab hien sp moi o duoi
    switch (type) {
        case 'trend':
            document.getElementById('new').style.display = 'none';//an di
            document.getElementById('best-sell').style.display = 'none';//an di
            break;

        case 'new':
            document.getElementById('trend').style.display = 'none';//an di
            document.getElementById('best-sell').style.display = 'none';//an di
            break;

        case 'best-sell':
            document.getElementById('trend').style.display = 'none';//an di
            document.getElementById('new').style.display = 'none';//an di
            
            break;
    }
}