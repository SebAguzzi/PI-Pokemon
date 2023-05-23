const validation = (value) => {
    let errors = {};
    
    if(!/^[A-Za-z]{1,30}$/g.test(value.name)) errors.name = "Only letters";
    if (!value.name) errors.name = "Need a name";

    if (!/\.(jpeg|jpg|gif|png|bmp|svg)$/i.test(value.image)) errors.image = "Enter Url Image";
    if (!value.image) errors.image = "Need an image";

    if(!value.health) errors.health = "Need health";
    if(value.health < 0 || value.health > 255) errors.health = "Health must be between 0 and 255";

    if(!value.attack) errors.attack = "Need attack";
    if(value.attack < 0 || value.attack > 255) errors.attack = "Attack must be between 0 and 255";

    if(!value.defense) errors.defense = "Need defense";
    if(value.defense < 0 || value.defense > 255) errors.defense = "Defense must be between 0 and 255";

    if(value.speed) { 
    if(value.speed < 1 || value.speed > 255) errors.speed = "Speed must be between 0 and 255";
    }

    if(value.height) { 
    if(value.height < 1 || value.height > 40) errors.height = "Height must be between 0 and 40";
    }

    if(value.weight) { 
    if(value.weight < 1 || value.weight > 2500) errors.weight = "Weight must be between 0 and 2500";
    }

    return errors;
};

export default validation;