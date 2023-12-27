
# TODO Supabase App

Aplicación todo list hecha en React native y Supabase.

Para comenzar, hay que configurar la aplicación de supabase creando un archivo en la raíz de el proyecto con el siguiente valor

```
export const process = {
    env:{
        SUPABASE_URL: 'VALOR_URL_SUPABASE',
        SUPABASE_PUBLIC_KEY:'VALOR_LLAVE_PUBLICA_SUPABASE',
    }
};
```

SUPABASE_URL: Valor de la url que tenemos configurado en supabase
SUPABASE_PUBLIC_KEY: Llave publica de nuestro proyecto.