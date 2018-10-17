/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  ConditionIconPaths,
} from './models/condition-icon-paths';
import {
  Forecast,
} from './models/forecast';


export namespace Components {

  interface KwsCondition {
    'bgColor': string;
    'condition': number;
    'iconPaths': ConditionIconPaths;
  }
  interface KwsConditionAttributes extends StencilHTMLAttributes {
    'bgColor'?: string;
    'condition'?: number;
    'iconPaths'?: ConditionIconPaths;
  }

  interface KwsDailyForecast {
    'forecasts': Array<Forecast>;
    'iconPaths': ConditionIconPaths;
    'scale': string;
  }
  interface KwsDailyForecastAttributes extends StencilHTMLAttributes {
    'forecasts'?: Array<Forecast>;
    'iconPaths'?: ConditionIconPaths;
    'scale'?: string;
  }

  interface KwsTemperature {
    'scale': string;
    'temperature': number;
  }
  interface KwsTemperatureAttributes extends StencilHTMLAttributes {
    'scale'?: string;
    'temperature'?: number;
  }

  interface KwsUvIndex {
    'uvIndex': number;
  }
  interface KwsUvIndexAttributes extends StencilHTMLAttributes {
    'uvIndex'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'KwsCondition': Components.KwsCondition;
    'KwsDailyForecast': Components.KwsDailyForecast;
    'KwsTemperature': Components.KwsTemperature;
    'KwsUvIndex': Components.KwsUvIndex;
  }

  interface StencilIntrinsicElements {
    'kws-condition': Components.KwsConditionAttributes;
    'kws-daily-forecast': Components.KwsDailyForecastAttributes;
    'kws-temperature': Components.KwsTemperatureAttributes;
    'kws-uv-index': Components.KwsUvIndexAttributes;
  }


  interface HTMLKwsConditionElement extends Components.KwsCondition, HTMLStencilElement {}
  var HTMLKwsConditionElement: {
    prototype: HTMLKwsConditionElement;
    new (): HTMLKwsConditionElement;
  };

  interface HTMLKwsDailyForecastElement extends Components.KwsDailyForecast, HTMLStencilElement {}
  var HTMLKwsDailyForecastElement: {
    prototype: HTMLKwsDailyForecastElement;
    new (): HTMLKwsDailyForecastElement;
  };

  interface HTMLKwsTemperatureElement extends Components.KwsTemperature, HTMLStencilElement {}
  var HTMLKwsTemperatureElement: {
    prototype: HTMLKwsTemperatureElement;
    new (): HTMLKwsTemperatureElement;
  };

  interface HTMLKwsUvIndexElement extends Components.KwsUvIndex, HTMLStencilElement {}
  var HTMLKwsUvIndexElement: {
    prototype: HTMLKwsUvIndexElement;
    new (): HTMLKwsUvIndexElement;
  };

  interface HTMLElementTagNameMap {
    'kws-condition': HTMLKwsConditionElement
    'kws-daily-forecast': HTMLKwsDailyForecastElement
    'kws-temperature': HTMLKwsTemperatureElement
    'kws-uv-index': HTMLKwsUvIndexElement
  }

  interface ElementTagNameMap {
    'kws-condition': HTMLKwsConditionElement;
    'kws-daily-forecast': HTMLKwsDailyForecastElement;
    'kws-temperature': HTMLKwsTemperatureElement;
    'kws-uv-index': HTMLKwsUvIndexElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
