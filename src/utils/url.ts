/**
 * Delete a query param from URL
 */
 export function removeURLParameter(url: string, parameter: string): string {
    const urlparts = url.split('?');   
    if (urlparts.length >= 2) {
  
        const prefix = encodeURIComponent(parameter) + '=';
        const pars = urlparts[1].split(/[&;]/g);
  
        //reverse iteration as may be destructive
        for (let i = pars.length; i-- > 0;) {    
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
                pars.splice(i, 1);
            }
        }
  
        return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
    }
    return url;
  }
  
  /**
   * Delete query params from URL
   */
  export function removeURLParameters(url: string, parameters: string[]): string {
    parameters.forEach(parameter => {
      url = removeURLParameter(url, parameter)
    })
    return url
  }