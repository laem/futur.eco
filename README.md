> Copyright 2023,2024 Maël THOMAS-QUILLÉVÉRÉ. L'ensemble de ce dépot est soumis à la licence AGPL3.

Ce dépôt contient le code du site Web [futur.eco](https://futur.eco).

> À noter, les développements de 2024 se concentrent sur une nouvelle application Web de cartes généralistes et libres, avec une attention particulière sur les itinéraires pour aider les gens à voyager tout en respectant la planète.
> À terme, les calculateurs futureco concernant la mobilité, l'audience principale du site en 2024, seront intégrés dans cartes.app, au plus près du besoin du grand public.

## Les calculateurs carbone futureco

> Cette partie historique du site continue d'être disponible et maintenue, et servie au grand public via les articles du site bonpote.com. Dans un second temps, elles seront fusionnées dans l'application de cartes.

La catastrophe climatique n'est plus une menace lointaine et incertaine, c'est une actualité. Comment éviter le pire ? Chaque aspect de notre vie moderne a un impact.

Or, aujourd'hui, c'est très difficile de le connaître : les données sont éparpillées, souvent dans des articles de presse sans source. Des simulateurs et modèles d'impact carbone existent, mais aucun ne répond à ces priorités :

- l'interface doit s'adresser au grand public. Balancer des kgCO2e sans explication n'est pas compréhensible
- le code doit être ouvert
- le code doit être lisible, critiquable, modifiable.

Sur ce dépôt, c'est le code du site en Javascript. Tout le contenu et les discussions autour des contribution s sur un autre dépot : [futureco-data](https://github.com/laem/futureco-data).

[Plus d'infos sur le projet](https://futur.eco/à-propos).

> 🇬🇧 Most of the documentation (including issues and the wiki) is written in french, please raise an [issue](https://github.com/betagouv/mon-entreprise/issues/new) if you are interested and do not speak French.

### Et techniquement ?

C'est un _fork_ d'un site de l'État, mon-entreprise.fr, qui permet de coder en français des règles de calculs, dans un langage simple et extensible, [publi.codes](https://publi.codes). De ces règles de calcul, des simulateurs (pour l'utilisateur lambda) et des pages de documentation qui expliquent le calcul (pour l'expert ou le curieux) sont générés automatiquement.

Au-delà de ça, nous sommes sur une appli traditionnelle NextJS / styled-components.
