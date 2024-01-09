function getByPath ([first, ...rest], obj)  {
    if(!first || !obj[first]) {
      // Either no path was supplied or the top-level property doesnt' exist in obj
      return undefined;
    }

    if (rest.length < 1) {
      return obj[first];
    } else {
      return getByPath(rest, obj[first]);
    }
  }

var paths = ([...args],obj) => {
    if ( args.length === 0 || !args[0] || !obj[args[0] ) return undefined;
    let count = 0;
    const recursion = (item,passObj) => {
    for (const key in passObj) {
        if ( key === item) {
                count += 1;
            if ( count == args.length ) return passObj[key];
                return recursion(args[i],passObj[key]);
            }
        }
    }
    return recursion(args[i],obj);
}
