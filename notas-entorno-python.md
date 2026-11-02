# Notas: entorno Python y Jupyter

Apuntes para cuando algo no funcione y no recuerde por qué.

---

## 1. Rutina diaria

```bash
cd ~/The-Bridge-python
source .venv/bin/activate      # activar el entorno (verás "(.venv)" al principio)
code .                         # abrir VS Code

# ... trabajar en los ejercicios ...

git add .
git commit -m "Ejercicio XX: descripción"
git push
```

---

## 2. ¿Qué es el `.venv` y por qué hace falta?

- Es un **entorno virtual**: una copia de Python solo para este proyecto, con sus propias librerías.
- Ubuntu **no deja** instalar librerías con `pip` en el Python del sistema (error `externally-managed-environment`). Por eso se usa el `.venv`.
- El `.venv` **no se sube a GitHub** (está en `.gitignore`). Lo que se sube es `requirements.txt`, la lista de librerías.

### Un solo `.venv` para todos los ejercicios

"Este proyecto" = **todo el repo**. El `.venv` está en la raíz y sirve para todas las subcarpetas:

```
The-Bridge-python/
├── .venv/                 ← un solo entorno para todo
├── 01-ejemplo-python/     ✅ lo usa
├── 02-listas/             ✅ lo usa
├── 03-pandas/             ✅ lo usa
└── ...
```

- Si instalo una librería una vez (ej. `pandas`), la tengo en **todos** los ejercicios.
- ⚠️ **Abrir siempre la carpeta principal en VS Code**, NO una subcarpeta. Si abro solo `03-pandas/`, VS Code no encuentra el `.venv` (está un nivel más arriba) y vuelve el error de ipykernel.
- Con cada notebook nuevo, puede que la primera vez tenga que elegir el kernel `.venv` (arriba a la derecha). Normalmente lo sugiere solo.
- En la terminal da igual la subcarpeta: si activé el entorno, sigue activo aunque haga `cd 02-listas`.

---

## 3. ¿Cuándo hay que hacer `source .venv/bin/activate`?

| Dónde trabajo | ¿Hace falta activar? |
|---|---|
| Notebooks (`.ipynb`) en VS Code | ❌ No, usan el **kernel** elegido (`.venv`) |
| `pip install ...` en la terminal | ✅ Sí |
| `python3 archivo.py` que usa librerías (pandas, numpy...) | ✅ Sí |
| `python3 archivo.py` sin librerías externas | Funciona igual |

- Se activa **una vez por terminal**. Si abro una terminal nueva, hay que repetirlo.
- Si veo `(.venv)` al principio de la línea, ya está activado.
- Para salir: `deactivate`

---

## 4. Instalar una librería nueva

```bash
source .venv/bin/activate
pip install pandas
pip freeze > requirements.txt    # actualiza la lista de librerías del repo
```

Para recrear el entorno en otro ordenador:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

---

## 5. Errores que ya me han pasado

### "Running cells with 'Python 3.12.3' requires the ipykernel package"
VS Code está usando el **Python del sistema** en vez del `.venv`.
- **NO** pulsar "Install".
- Pulsar **Change Kernel** → **Python Environments** → **.venv**.
- Si `.venv` no aparece: comprobar que tengo abierta la carpeta del proyecto (Archivo → Abrir carpeta), o `Ctrl+Shift+P` → "Reload Window", o "Enter interpreter path" → `/home/maru/The-Bridge-python/.venv/bin/python`.

### `error: externally-managed-environment` al hacer `pip install`
No tengo el `.venv` activado. Hacer `source .venv/bin/activate` y repetir.

### `ModuleNotFoundError: No module named 'pandas'` (o cualquier librería)
- O no está instalada → `pip install pandas` (con el `.venv` activado).
- O estoy usando el Python equivocado → activar el `.venv` / cambiar el kernel del notebook.

### `sudo` no me deja escribir la contraseña
**Sí está escribiendo**, pero Linux no muestra nada (ni asteriscos) por seguridad. Escribirla y pulsar Enter.

### No recuerdo la contraseña de Ubuntu (WSL)
Desde **PowerShell de Windows**:
```powershell
wsl -u root
```
Y dentro:
```bash
passwd maru      # primero el comando, Enter, y LUEGO pide la contraseña nueva
exit
```

---

## 6. Forks: ¿sí o no?

- Para mis ejercicios: **no**. Todo en mi propio repo, con una carpeta por ejercicio.
- Un fork sirve para **contribuir a un proyecto ajeno** (mandar un Pull Request) o cuando me lo pidan en el curso.
- **Nunca** clonar un fork **dentro** de este repo: en GitHub saldría como carpeta vacía (repo dentro de repo). Los forks van en carpetas aparte, fuera de esta.
