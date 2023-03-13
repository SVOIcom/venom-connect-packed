import {VenomConnect} from 'venom-connect';
import {ProviderRpcClient} from 'everscale-inpage-provider';
import {EverscaleStandaloneClient} from 'everscale-standalone-client';

window.venom = {VenomConnect, ProviderRpcClient, EverscaleStandaloneClient};

if(!window.VenomConnect) {
    for (let name in window.venom) {
        window[name] = window.venom[name];
    }
}
