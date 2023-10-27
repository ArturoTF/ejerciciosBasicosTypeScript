#Hecho por ArturoTF
import subprocess

# Comando 1
comando1 = "tsc .\primeraPractica.ts"

# Comando 2
comando2 = "node .\primeraPractica.js"  

# Ejecutar los comandos
try:
    subprocess.run(comando1, shell=True, check=True)
    subprocess.run(comando2, shell=True, check=True)
except subprocess.CalledProcessError as e:
    print("Error al ejecutar el comando:", e)
