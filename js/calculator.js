$(document).ready(function () {
    $('.range-slider').each(function(){
        var t = $(this),
            min = t.data('min'),
            max = t.data('max'),
            input = t.closest('.calc-block').find('.calc-input');
        t.slider({
            min: min,
            max: max,
            range: 'min',
            value: input.val(),
            slide:function( event,ui ) {
                var t = $(this);
                if(t.hasClass('departure-slider')){
                    $('.departure-input').val(0);
                    input.val(ui.value);
                    calc(true, ui.value);
                    return;
                }
                input.val(ui.value);
                calc();
            }
        })
    });

    function delchar(inp){
        var value = inp.val();
        var rep = /[\D]/;
        if(rep.test(value)){
            value = value.replace(rep,'');
            inp.val(value);
        }
        inp.val(value);
    }

    var VAL;

    function focusInp(inp){
        VAL = inp.val();
        inp.val('');
    }

    function blurInp(inp){
        if(inp.val() == '') inp.val(VAL);
    }

    function strRep(str){
        var strNew = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        strNew = strNew.replace('.',',');
        return strNew;
    }

    $('.calc-input').on({
        keyup: function(){
            var t = $(this),
                value = +t.val(),
                max = +t.closest('.calc-block').find('.range-slider').data('max');
            t.closest('.calc-block').find('.range-slider').slider('value',value);
            if(value > max) t.val(max);
            delchar(t);
            calc();
        },
        focus: function(){
            focusInp($(this));
        },
        blur: function(){
            blurInp($(this));
        }
    });

    // var sum = 0;

    var isFirstCalc = true;

    function calc(ind, depart){
        var computer = +$('#computer').val(),
            server = +$('#server').val(),
            equipment = +$('#equipment').val(),
            tel = +$('#tel').val(),
            departure = $('#departure'),
            sum = 0,
            dep = 0,
            depRange = 0,
            depRangeMin = 0;
        sum = computer * 850 + server * 2500 + equipment * 500 + tel * 250;
        dep = Math.floor(sum/6000);
        if(dep > 8) dep = 8;

        var slider = departure.closest('.calc-block').find('.range-slider');
        if (sum > 0 && isFirstCalc == true)
        {
            //yaCounter24175795.reachGoal('calc');
            isFirstCalc = false;
        }

        if(!ind && slider.slider){
            slider.slider('value',dep);
            departure.val(slider.slider('value'));
        }
        if(ind){
            if(depart < dep){
                depRangeMin = dep - depart;
            }else{
                depRange = depart - dep;
            }
            departure.val(depart);
        }

        sum += depRange * 3000 - depRangeMin * 2000;

        $('#result').text(strRep(sum));
        $('.calc-form [name="message"]').val('\nКомпьютеры: ' + computer + ';\nСерверы: ' + server + ';\nОргтехника: ' + equipment + ';\nТелефоны: ' + tel + ';\nВыездов в месяц: ' + departure.val() + ';\nИтого: ' + sum);
    }

    calc();

    $('.range-slider_asvdc').each(function(){
        var t = $(this),
            min = t.data('min'),
            max = t.data('max'),
            value = t.data('value'),
            input = t.closest('.calc-block').find('.calc-input-asvdc');
        t.slider({
            min: min,
            max: max,
            range: 'min',
            value: value,
            slide:function( event,ui ) {
                var t = $(this);
                var values = t.data('values');
                if(values) values = values.split(',');
                var v = Number(ui.value);
                if(values){
                    input.val(values[--v]);
                }else{
                    input.val(ui.value);
                }
                calcasvdc();
            }
        })
    });

    function calcasvdc(){
        if(!$('#input-cpu').length) return;
        var cpu = $('#input-cpu').val(),
            ram = $('#input-ram').val(),
            hdd = $('#input-hdd').val(),
            //os = $('#input-os').val(),
            mo = $('#input-mo').val(),
            c = $('#input-1c').val(),
            //kav = $('#input-kav').val(),
            //sql = $('#input-sql').val(),
            //ts = $('#input-ts').val(),
            cpuCost = 1000,
            ramCost = 300,
            hddCost = 100,
            //osCost = 0,
            moCost = 400,
            cFix = 500,
            cCost = 200,
            //kavCost = 0,
            //sqlCost = 5750/2,
            //tsCost = 0,
            sum = 0;

        cpuCost *= +cpu;
        ramCost *= +ram;
        hddCost *= +hdd/100;
        /* if(os === 'Windows'){
         osCost = 500;
         } */
        moCost *= +mo;
        cCost = (+c * cCost) + cFix;
        /* if(kav === 'Р”Р°'){
         kavCost = 600;
         }
         sqlCost *= +sql;
         if(ts !== '0'){
         if(ts === '8/5'){
         if(os === 'Windows'){
         tsCost = 4000;
         }else{
         tsCost = 6000;
         }
         }
         if(ts === '24/7'){
         if(os === 'Windows'){
         tsCost = 7000;
         }else{
         tsCost = 10000;
         }
         }
         } */
        sum = cpuCost + ramCost + hddCost + moCost + cCost;
        var str = 'Процессор: ' + cpu + '; ';
        str += 'Память: ' + ram + '; ';
        str += 'Гигабайт: ' + hdd + '; ';
        //str += 'Операционная система: ' + os + '; '
        str += 'Офис‚ Microsoft Office: ' + mo + '; ';
        str += '1C: Бухгалтерия: ' + c + '; ';
        //str += 'Kaspersky Anti-Virus: ' + kav + ';';
        //str += 'Microsoft SQL Server Standard: ' + sql + '; ';
        //str += 'Техническая поддержка: ' + ts + '; ';
        str += 'Итого: ' + strRep(sum) + ';';
        $('.calc-form [name="message"]').val(str);
        $('#result_asvdc').text(strRep(sum))
    }

    calcasvdc();
});