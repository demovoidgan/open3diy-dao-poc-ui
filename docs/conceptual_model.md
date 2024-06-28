# pensando

- el sujeto de open3diy: 

- el proposito: expertos de soluciones que conocen su oficio y demandantes de personalizaciones o correccion o evoluciones puedan encontrarse firmar acuerdos

- marco de trabajo: open3diy es una dao (organización autonomo descentralizada) que proporciona un token que representa el valor de la organización y una dApp (aplicación descentralizada) que permite a los participantes interactuar en la web3

+ entidades
    - fundador: 
    - comunidad: 
    - activo de solución: 
    - demandante: 
    - desarrollador:
    - oferta:
    - hoja de ruta de oferta
    - el token:
    - holders del token:
    - dApp: applicación web3, con libro contrable distribuido en L2 de ethereum, que representa y modela todas las posibilidades del proposito del sujeto de open3diy
    

## componentes de la dApp y sus casos de uso

+ setup de open3diy

    fundador crea modelo de mercado representado en la dApp
    comunidad propone evoluciones o correcciones del modelo de mercado, vota y aprueba por cambiarlo
    
    fundador crea etiquetas de clasificación de las diferentes soluciones

    comunidad propone, vota y aprueba por las diferentes etiquetas de las soluciones
        las etiquetas ya relacionadas a soluciones tienen un coste más elevado de cambio porque supone cambiar la solución

+ desde setup de open3diy, catálogo de activos de solución

    fundador crea primero catálogo de soluciones para demostrar a la comunidad el tipo de soluciones que se pueden ofrecer
    
    comunidad propone y aprueba catálogo de soluciones que puede proporcionar

    dApp muestra un catálogo de soluciones leyendo del NFT
        el orden de importancia, lo define los votos de la comunidad
        las diferentes etiquetas son relacionadas

+ desde catálogo de activos de solución, detalle activo y lista de ofertas de los desarrolladores

    dApp muestra detalle app y lista de ofertas de los desarrolladores
        con la capacidad actual para solicitar por parte de demandante
        lista de ofertas

    desarrollador crea una oferta de personalización
        indica modo de entrega: repositorio o envío
        en su caso, indica URL repositorio de entrega: github o gitlab
        indica localizaciones que atiende: lista tipo ES-es, ES, EN, etc
        indica información de atención al público:
            indica URL de contacto discord
                seguir plantilla propuesta
            dias de la semana o mes que atienda
            horario de atención
        indica periodicidad de cada iteración de entrega de producto: cada 1 o 3 0 7 o 15 días, más no.
        indica capacidad para atender de forma simultanea a distintos clientes
        indica ofertas a la solución
            para cada oferta se indica resumen, coste en horas y precio token de cada hora, nº de iteraciones necesarias estimadas, resumen del alcance o url y hash del documento que refleje el alcance
                es norma que se estime mal, en horas, iteraciones o coste, pero la practica perfeccionará esta configuración
                podrá añadir nuevas ofertas y borrar anteriores
                    si hay demandantes en curso no podrá borrar solo crear, pero no se podrán nuevos demandantes unir a ofertas borradas
                    nunca se borra si han existido demandantes en una oferta, se podrá ver analisis
        
    desarrollador crea aviso para sus ofertas si actualmente está abierto o cerrado para atender al público

    demandante proponen alcance ofertado al desarrollador

    desarrollador aprueba o deniega o adapta oferta de personalización

    dApp muestra enlace de analitics de cada hoja de ruta historica relacionada
    

+ desde detalle de activo, solicitud de demanda de oferta

    demandante se pone en contacto en sitio discord del desarrollador para llegar a un acuerdo
        la plataforma no es el sitio de contacto, el libre dialogo en herramientas que funcionan como discord es la forma de comunicación
    
    demandante y desarrollador firman contrato multifirma para la siguiente iteración
        comunican si lo consideran email o forma de notificacion
        seleccionan ofertas acordadas que tienen coste relacionada
        indican URL de evidencia de acuerdo, con URL a sitio discord o github o lugar de evidencia
            son proyectos open, si existe información confidencial no deben indicarla
        se calcula coste en base a ofertas incluidos en la iteración y precio de cada oferta
        desarrollador crea fondo scrow en base al coste de la iteración, es opcional
            //TODO la dinamica economica como la del token tengo que definirla, no la tengo claro
        demandante crea fondo scrow en base al coste de la iteración

    desarrollador y demandante firman reuniones periodicas que estimen necesarias con la URL al sitio publico discord o que consideren oportuno
        hacen las reuniones de seguimiento que vean oportunas, ajeno a la dAPP, pero las evidencias ayudan a la resolución de conflictos
        esta información entra como analisis para el resto de la comunidad para elegir a un desarrollador y conocer su transparencia
    
    desarrollador y demandante firman fin de la iteración
        desarrollador y demandante marcan si es el fin de la entrega, el acuerdo está terninado en todos los aspectos y se liberan los fondos
        desarrollador y demandante acuedan siguiente iteración con ofertas incluidas y coste
        desarrollador y demannte marcan siguiente iteración con oferta y coste ajustado
            podrán acordar corrección en oferta y coste en horas como compensación
            //TODO esto es en alto nivel, aquí tengo que pensar en un modelo de ajuste 
        
        //TODO no quiero entrar en detalles porque prefiero investigar sobre scrow y conocer dinamicas
    
    servicio de plazos (por determinar) marcan fin de iteracion si no hay intervención de alguna parte
        2 dias y 1 día y 1 hora antes de acabar para fin plazo crea mensaje smart contrat para notificación a la dApp y notifica mensajeria
        si no hay aviso demandante y/o desarrollador libera los fondos scrow

    desarrollador o demandante inician desacuerdo en iteración
        se inicia el proceso externo de las cortes y resolución de conflicto
