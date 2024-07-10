$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Tooltip');
        comp_comp1.code = '<nav class="flex items-center flex-wrap px-4 py-5 container mx-auto"> <a href="#" class="text-blue-600 text-xl font-medium uppercase hover:text-blue-800 mr-auto">                 Company </a> \
    <button class="hover:bg-blue-600 hover:text-white px-3 py-2 rounded text-blue-600 lg:hidden" data-name="nav-toggler" data-pg-ia=\'{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}\'> <span class="block border-b-2 border-current my-1 w-6"></span> <span class="block border-b-2 border-current my-1 w-6"></span> <span class="block border-b-2 border-current my-1 w-6"></span> \
    </button>     \
    <div data-name="nav-menu" class="lg:flex lg:space-x-4 lg:space-y-0 lg:w-auto space-y-2 w-full hidden lg:items-center flex-grow" data-pg-collapsed> \
        <div class="flex flex-col lg:flex-row mx-auto"> <a href="#" class="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Кухні</a> <a href="#" class="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Шафи</a> <a href="#" class="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Вітальні</a> <a href="#" class="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Офісні меблі</a> <a href="#" class="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Дитячі меблі</a> \
        </div>         <a href="#" class="bg-blue-600 font-light inline-block px-5 py-2 rounded text-white hover:bg-blue-700 uppercase">Sign Up</a> \
    </div>     \
</nav>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});