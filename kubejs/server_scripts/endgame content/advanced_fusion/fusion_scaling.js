ServerEvents.recipes(event => {
    const id = global.id;

    // Fusion
    event.remove({type: 'gtceu:fusion_reactor'});

    const Fusion = (type,outputQuant,input1,input1Quant,input2,input2Quant,EUt,DurationSeconds,StartMEU) => {
    event.recipes.gtceu.fusion_reactor(id(`${type}_from_${input1}_and_${input2}`))
        .inputFluids(`gtceu:${input1} ${input1Quant}`, `gtceu:${input2} ${input2Quant}`)
        .outputFluids(`gtceu:${type} ${outputQuant}`)
        .duration(DurationSeconds * 20)
        .fusionStartEU(StartMEU * 1000000)
        .EUt(EUt);
    };

    Fusion('chromium',144,'hydrogen',1000,'vanadium',144,24576,14.4,140);
    Fusion('helium_plasma',1000,'deuterium',1000,'tritium',1000,4096,7.2,40);
    Fusion('europium',144,'neodymium',144,'hydrogen',3000,24576,28.8,150);
    Fusion('osmium',144,'silver',144,'copper',144,24576,28.8,150);
    Fusion('nickel_plasma',144,'potassium',144,'fluorine',1000,30720,7.2,480);
    Fusion('uranium',144,'gold',144,'aluminium',144,24576,57.6,140);
    Fusion('uranium_235',144,'mercury',1000,'magnesium',144,24576,57.6,140);
    Fusion('tritanium',144,'titanium',216,'duranium',288,30720,21.6,200);
    Fusion('naquadria',144,'enriched_naquadah',576,'radon',4000,49152,57.6,400);
    Fusion('nitrogen_plasma',1000,'beryllium',144,'deuterium',3000,16384,7.2,280);
    Fusion('darmstadtium',144,'arsenic',288,'ruthenium',144,30720,14.4,200);
    Fusion('radon',1000,'gold',144,'mercury',100,30720,28.8,200);
    Fusion('indium',576,'silver',576,'lithium',576,24576,7.2,280);
    Fusion('duranium',144,'gallium',144,'radon',1000,16384,28.8,140);
    Fusion('oxygen_plasma',1000,'carbon',144,'helium_3',1000,4096,12.8,180);
    Fusion('iron_plasma',144,'silicon',144,'magnesium',144,7680,10.8,360);
    Fusion('americium',144,'lutetium',144,'chromium',144,49152,14.4,200);
    Fusion('plutonium_241',144,'krypton',1000,'cerium',144,49152,57.6,240);
    Fusion('neutronium',144,'americium',576,'naquadria',576,98304,45,600);
    Fusion('lutetium',144,'lanthanum',144,'silicon',144,7680,7.2,80);
    Fusion('plutonium',144,'xenon',1000,'zinc',144,49152,57.6,120);
    Fusion('argon_plasma',1000,'carbon',144,'magnesium',144,24576,7.2,180);
    Fusion('americium_plas_plasma',144,'plutonium_241',144,'hydrogen',1000,98304,15.6,760);
    Fusion('tin_plas_plasma',144,'silver',144,'helium_3',1500,24576,7.2,280);
    Fusion('aurourium',144,'nether_star_concentrate',288,'seaborgium',216,884736,19.2,888);
    Fusion('paradox_plasma',144,'chaos_centric_void',250,'order_centric_void',250,294912,16.2,900);
    Fusion('magmatic_plasma',144,'infernal_concentrate',500,'iron_plasma',288,66666,12.8,720);
    Fusion('voidic_plasma',144,'echo_r',576,'void',144,344064,27,1040);
    Fusion('preon_plasma',216,'utopian_akreyrium',1000,'dragon_breath',50,688128,19.2,1160);
    Fusion('maxwellium',144,'nyanium',144,'abyssal_alloy',144,1250801,9.6,1350);

});