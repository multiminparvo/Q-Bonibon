(function (self) {
    self.gateOrder = '';

    self.randomTreasure = [
        {
            path: 'x',
            treasureStyle: ''
        },
        {
            path: 'y',
            treasureStyle: ''
        },
        {
            path: 'z',
            treasureStyle: ''
        },
        {
            path: 'h',
            treasureStyle: ''
        }
        ,
        {
            path: 'x-h',
            treasureStyle: ''
        }
    ]
    self.infoconfig = {
        x: '<div class="info-wrapper">'+
            '<div class="info-header">X Gate</div>'+
            '<div class="info-text">X gate, o andaki qubiti durumunu aşağıdaki Pauli X matrixi üzerinden manipule eder.</div>'+
            '<div class="matrix x" syle="background-image:url(imgs/matrix-x.png)">  </div> ' +
            '<div class="info-text">Bir qubite etkisinin şurada görebilirsiniz :) </div>'+
            '<div class="qubit x" syle="background-image:url(imgs/info-x.png)">  </div> ' +
            '</div>'
            
        ,
        y: '<div class="info-wrapper">'+
            '<div class="info-header">Y Gate</div>'+
            '<div class="info-text">Y gate, o andaki qubiti durumunu aşağıdaki Pauli Y matrixi üzerinden manipule eder.</div>'+
            '<div class="matrix y" syle="background-image:url(imgs/matrix-y.png)">  </div> ' +
            '<div class="info-text">Bir qubite etkisinin şurada görebilirsiniz :) </div>'+
            '<div class="qubit y" syle="background-image:url(imgs/info-y.png)">  </div> ' +
            '</div>'
        ,
        z: '<div class="info-wrapper">'+
            '<div class="info-header">Z Gate</div>'+
            '<div class="info-text">Z gate, o andaki qubiti durumunu aşağıdaki Pauli Z matrixi üzerinden manipule eder.</div>'+
            '<div class="matrix z" syle="background-image:url(imgs/matrix-z.png)">  </div> ' +
            '<div class="info-text">Bir qubite etkisinin şurada görebilirsiniz :) </div>'+
            '<div class="qubit z" syle="background-image:url(imgs/info-z.png)">  </div> ' +
            '</div>'
        ,
        h: '<div class="info-wrapper">'+
            '<div class="info-header">Hadamard Gate</div>'+
            '<div class="info-text">Hadamard gate, o andaki qubiti durumunu aşağıdaki Hadamard matrixi üzerinden manipule eder.</div>'+
            '<div class="matrix h" syle="background-image:url(imgs/matrix-h.png)">  </div> ' +
            '<div class="info-text">Bir qubite etkisinin şurada görebilirsiniz :) </div>'+
            '<div class="qubit h" syle="background-image:url(imgs/info-h.png)">  </div> ' +
            '</div>'
        
    }
    self.init = function () {
        if (typeof $ === 'function') {
            self.createGame();
            self.setClickListener();
        }
    }

    self.setClickListener = function () {
        $(document).on('click', '.side-button-container', function () {
            var gate = $(this).attr('type')

            var html = self.infoconfig[gate]
            self.createInformationPopup(html)
        })

        $(document).on('click', '.button-container', function () {
            var gate = $(this).attr('type')

            self.changeImage(gate)
        })
    }


    self.changeImage = function (gate) {
        var imageName = gate;

        $(".game-image").css('background-image', 'url(imgs/' + imageName + '.png)')

    }

    self.createInformationPopup = function (html) {
        $('.info-wrapper').remove()
        $('.side-button-wrapper').after(html)
    }

    self.createGame = function () {

    }


    self.init();
})({})


var flake = '<div class="gold-image" style="    height: 100px;width: 100px;background-size: 60px 70px;background-repeat: no-repeat;background-image: url(imgs/gold.png);position: relative;z-index: 99999999;"></div>'
var youwin =  function () {

    var time = 0;
    var interval = 100
    var limit = 2000;
    var timer = setInterval(function () {
       
        

        console.log(time,limit)
        if(time > limit){
            clearInterval(timer);
        }else {
            create_snow_lake();
            remove_snow_lake();
        }

        time+=interval;
    }, interval);


};


$(document).on('click', '.button-container', function () {
    var gate = $(this).attr('type')

    if(gate === 'h'){
        youwin();
    }
})

function create_snow_lake() {
    console.log('CREATE')
    var falling_time = Math.floor(Math.random() * 10) + 5;
    var flake_pos = Math.floor(Math.random() * 90) + 4;
    var flake_size = (Math.floor(Math.random() * 100) + 1) / 100;
    var snow_flake = "<div class='flake-wrapper' style='width:40px; left:" + (flake_pos) + "%;height:40px;transform:scale(" + (flake_size) + ");animation:falling " + (falling_time) + "s linear'>" + flake + "</div>";
    $(snow_flake).appendTo('.background');
}

function remove_snow_lake() {
    $(".flake-wrapper").each(function () {
        var flake_pos = $(this).offset().top;
        var body_height = $(document).height() - 100;
        if (flake_pos > body_height) {
            $(this).remove();
        }
    });
}
