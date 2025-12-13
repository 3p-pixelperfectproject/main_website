function ouvrirFicheDoing(){

    document.getElementById("fiches").innerHTML = `
    
                            <h1> LA FICHE DE DOING </h1>
    
    `;
}

function ouvrirFicheSFI(){

    document.getElementById("fiches").innerHTML = `
    
                            <h1> LA FICHE DE SFI </h1>
                <!-- section-01 -->
            <section class="container-800 margin-top-100 margin-bottom-250 ">

                <h2 class="margin-bottom-25">Avant propos</h2>

                <p>Ce document est un document scolaire. Il n'est pas destiné à être diffusé.</p>
                <P class="margin-bottom-10">Nous n'avons pas demandé les autorisations d'utiliser les droits d'images,
                    les
                    droits d'auteurs, produits par les différents acteurs (ex. SFI, journaux etc.) par manque de
                    temps, de
                    moyen et de connaissances.</P>
                <p>Ce document est un clin à nos professeurs, Ludivine, Ophélie et Nicolas.</p>
                <p class="margin-bottom-10">Il a pour but de les remercier en mettant en pratique tout ce qu'il nous
                    appris
                    ces quinze derniers jours (et oui, ça n'avait pas l'air mais nous vous avons bien écouté!).</p>
                <p class="margin-bottom-10">Nous espérons que vous apprécierez l'expérience.</p>
                <p class=" margin-bottom-10 size-25"> GRAND MERCI A VOUS, LUDIVINE, OPHELIE ET NICOLAS !</p>
                <p class="margin-bottom-250"> PS: Ludivine je t'ai piqué des bouts de code, ne m'en veux pas.</p>


                <!-- mon parent -->
                <div class="flex space-between align-center margin-bottom-100">

                    <!-- mon premier enfant -->
                    <div class="w-40 relative pl-80 ">


                        <p class="big-number">01</p>

                        <!-- trait + titre -->
                        <div class="flex align-center gap-12 margin-bottom-50">
                            <div class="trait"></div>
                            <h2 class="goldy-color size-20 weight-bolder">SFI</h2>
                        </div>




                        <h3 class="margin-bottom-25 size-50"> Que propose SFI ?</h3>

                        <p class="margin-bottom-25">solution de Gestion de la Relation Client en mode SaaS</p>
                        <p class=" margin-bottom-25">spécialement conçue pour les PME et les TPE</p>

                        <a href="https://www.sfi.fr/" target="_blank" class="goldy-color btn"> Aller plus loin →</a>
                    </div>


                    <!-- mon deuxième enfant -->

                    <img src="asset/logoSFI.png" class="w-40 " alt="">

                </div>

            </section>
    `;
}

function ouvrirFicheBP(){

    document.getElementById("fiches").innerHTML = `
    
                            <h1> LA FICHE DE BANQUE POPULAIRE </h1>
    
    `;
}

ouvrirFicheBP()