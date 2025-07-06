# ArsenalF

## To run production docker build

```
make docker_up
```

## Post Build Steps

1. Navigate to http://domain:1337/admin/auth/register-admin
2. Navigate to settings, api tokens
3. Create new <u>__READ ONLY__</u> api key
4. Save api key somewhere <u>__TEMPORARY__</u>
5. Run the following from repository root
    - ``` ./scripts/post_build_script <newly_created_readonly_token ```
    - Note you will be asked for export decryption key. Author will know this key only(if he forgets check onenote).