const gui = require('nw.gui');
const win = gui.Window.get();

const runApp= ()=>{
    nw.Window.open('app/index.html', {
        show:false,
        frame: true,
        height: 650,
        width: 1200,
        position: "center"
    }, function(new_win) {
        // And listen to new window's focus event
        new_win.on('loaded', function() {
            setTimeout(holding, 3000);
            function holding () {
                win.close();
                new_win.show();
            }
        });
    });
};


win.setResizable(false);

win.on('loaded', function() {
    setTimeout(holding, 500);
    function holding () {
        win.show();
    }
});


runApp();
