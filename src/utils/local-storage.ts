
export function _get(key: string): any {
    const storage = _getStorage();
    let str: string = '';
    if (storage) {
        str = storage.getItem(key);
        return str && JSON.parse(str);
    }
};


export function _set(key: string, value: any): boolean {
    const storage = _getStorage();
    try{
        if (key && 'undefined' !== typeof value) {
            storage.setItem(key, JSON.stringify(value));
        }
        return true;
    }
    catch(e){
        console.error(e);
        return false
    }
    
    
};


export function _delete(key: string): boolean {
    try {
        const storage = _getStorage();
        if (storage && key) {
            storage.removeItem(key);
        }
        return true;
    }catch(e){
        console.error(e);
        return false;
    }
};


const _getStorage = function() {
    let _localStorage: any;
    try {
        _localStorage = window['localStorage'];
    } catch (e) {}

    return _localStorage;
};