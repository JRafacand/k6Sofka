# k6Sofka

To install k6 
1. Install Vsc https://code.visualstudio.com/
2. If you use the Windows Package Manager, install the official packages from the k6 manifests (created by the community)
3. winget install k6 --source winget
4. Clone, fork or download the repository https://github.com/JRafacand/k6Sofka.git
5. Open the project in Visual Studio Code
6. Install the k6 extension in Visual Studio Code
7. At the terminal, run the command k6 run --out json=results.json script.js
8. The results will be saved in the results.json file
9. Open the summary.html file to see the results in a more visual way
    
# Results:

The page https://petstore.octoperf.com/ had the same response time for 5, 10, and 20 users. The response time was 10m30s seconds
