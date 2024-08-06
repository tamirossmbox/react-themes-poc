import 'styled-components';

interface BaseProperties {
    background: string;
    color: string;
}

declare module 'styled-components' {
    export interface DefaultThemeDemo {
        background: string;
        color: string;
        borderColor: string;
        main: BaseProperties;
        navbar: BaseProperties;
        sidebar: BaseProperties;
        footer: BaseProperties;
    }
}